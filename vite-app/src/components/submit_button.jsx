export default function SubmitButton({text}) {

    // function handle_click (event) {
    //     event.preventDefault();
    //     if (onClick != null) {
    //         onClick(event);
    //     }
    // }

    return (
        <button type="submit" value="submit">{text}</button>
    );
};