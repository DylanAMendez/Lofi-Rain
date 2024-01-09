

const BackgroundVideo = ({ src }) =>
{
    return (
        <video autoPlay loop muted playsInline className=" opacity-50 " id="background-video">
            <source src={src} type="video/mp4" />
        </video>
    )
}

export default BackgroundVideo