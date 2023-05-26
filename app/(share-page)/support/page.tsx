"use client";
import "@/assets/SupportPage.css";
interface SupportPageProps {
    appName: string;
    supportEmail: string;
}

const SupportPage: React.FC<SupportPageProps> = ({ appName, supportEmail }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;
        // send support email using name, email, and message
        alert(
            `Thank you for contacting ${appName} support. We will get back to you at ${email} as soon as possible.`
        );
    };

    return (
        <div className="SupportPage">
            <h1>{appName} Support</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#overview">Overview</a>
                    </li>
                    <li>
                        <a href="#troubleshooting">Troubleshooting</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Us</a>
                    </li>
                </ul>
            </nav>
            <main>
                <section id="overview">
                    <h2>Overview</h2>
                    <p>
                        Welcome to our {appName} support page. Here you will
                        find helpful resources and information to assist you
                        with any issues you may be experiencing with our app.
                    </p>
                </section>
                <section id="troubleshooting">
                    <h2>Troubleshooting</h2>
                    <p>
                        If you are experiencing any issues with the app, please
                        consult our troubleshooting guide for help.
                    </p>
                    <a href="troubleshooting.html">Troubleshooting Guide</a>
                </section>
                <section id="contact">
                    <h2>Contact Us</h2>
                    <p>
                        If you are still having issues or have any questions,
                        please contact us using the form below:
                    </p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                        ></textarea>
                        <button type="submit">Send</button>
                    </form>
                </section>
            </main>
            <footer>
                <p>
                    &copy; {new Date().getFullYear()} {appName}. All rights
                    reserved.
                </p>
                <p>
                    Contact us at{" "}
                    <a href={`mailto:${supportEmail}`}>{supportEmail}</a> for
                    support.
                </p>
            </footer>
        </div>
    );
};

export default SupportPage;
