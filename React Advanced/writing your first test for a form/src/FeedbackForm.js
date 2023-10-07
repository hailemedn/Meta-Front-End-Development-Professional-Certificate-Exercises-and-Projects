import { useState } from "react"

export default function FeedbackForm({onSubmit}) {
    const [score, setScore] = useState(10);
    const [comment, setComment] = useState("") 
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({score, comment});
    }
    const isDisabled = Number(score) < 5 && comment.length <= 10;
    const textPlaceHolder = isDisabled ? "Please Provide a comment" : "optional comment";

    return (
        <div>
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit}>
                <label>score: {score} ⭐</label>
                <input type="range" min={1}  max={10} value={score} onChange={(e) => setScore(e.target.value)}></input>
                <textarea cols={15} rows={5} placeholder={textPlaceHolder} value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                <button disabled = {isDisabled}>Submit</button>
            </form>
        </div>
    )
}