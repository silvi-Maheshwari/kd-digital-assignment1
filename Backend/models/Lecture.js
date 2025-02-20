const mongoose=require('mongoose')
const lectureSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, required: true },
});
lectureSchema.pre('save', async function (next) {
    const existingLecture = await mongoose.model('Lecture').findOne({
        instructor: this.instructor,
        date: this.date
    });
    if (existingLecture) {
        return next(new Error('Instructor already has a lecture scheduled on this date'));
    }
    next();
});
module.exports = mongoose.model('Lecture', lectureSchema);