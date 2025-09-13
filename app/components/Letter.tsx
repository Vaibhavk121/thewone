import Image from "next/image"
import Sign from "../../public/sign.svg"

export default  function Letter() {
    return (
        <div className="flex justify-center items-center h-screen bg-white ">
            <div className="flex flex-col w-1/2 gap-5 ">
            <h1 className="font-bold text-4xl">An open letter from our CEO — the future of hiring is human-first.</h1>
            <p>The rise of AI has brought us to a crossroads in recruitment. Many are choosing to replace human judgment with automation. We&quot;ve taken a different path at Wone. We believe deeply in the irreplaceable value of human connection in hiring. <br />

                Our mission isn&quot;t to automate people out of the process—it&quot;s to amplify what makes us human. Our platform automates the time-intensive tasks that drain a recruiter&quot;s day so they can focus on what matters most: building relationships and strengthening employer brands. <br />

                What sets us apart? Our system learns from every interaction, adapting to your organizations specific needs while providing context on why each candidate is a strong match. While many tech solutions minimize human involvement, we maximizing human potential. <br />

                For job seekers, we&quot;re ending the frustrating void of unanswered applications that has become all too common. Everyone deserves to be seen, heard, and respected throughout their career journey. Through personalized feedback and guidance, we&quot;re helping people navigate a changing world of work with confidence and dignity.</p> 

            <h1 className="font-bold text-4xl">A future where everyone wins.</h1>
            <p>Were building a future where recruiters connect with diverse talent more effectively, companies find the right people faster and job seekers receive the guidance they need to succeed.

                This is hiring reimagined—where technology elevates human potential and handles the routine so people can focus on the remarkable.

                Join us in building this future.

                Sincerely, <br />
                DS</p>
                <Image src={Sign}  alt="" className="w-40" />
        </div>
        </div>
    )
}
