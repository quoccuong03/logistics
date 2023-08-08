"use client";
const videoHome = `${process.env.NEXT_PUBLIC_BASE_URL}/uploads/app/landingpage/home/ai-stylist.mp4`;
export default function VideoInfo() {
    return (
        <div>
            <video
                autoPlay
                muted
                playsInline
                preload="none"
                loop
                className="mx-auto"
            >
                <source src={videoHome} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
