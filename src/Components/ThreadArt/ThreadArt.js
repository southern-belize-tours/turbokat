import React, { useState, useRef, useEffect } from 'react';

const ThreadArt = () => {

    const [image, setImage] = useState(null);
    const canvasRef = useRef(null);

    const handleImageUpload = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
    }

    useEffect(() => {
        const generateStringArtCircle = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    })

    return (
        <div>
            <h1>Thread Art Works!</h1>
            <input type="file" accept="image/*" onchange={handleImageUpload}/>
            <canvas ref={canvasRef} width={500} height={500} style={{ border: '1px solid #ccc'}}></canvas>
        </div>
    )
}

export default ThreadArt;