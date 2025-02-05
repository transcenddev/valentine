"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const noImages = [
    "https://i.pinimg.com/736x/7a/d0/3e/7ad03ed9989cb0b7380a7c4847a76209.jpg",
    "https://i.pinimg.com/736x/3d/3d/8a/3d3d8a4822cc60308c107b4b0c4d1260.jpg",
    "https://i.pinimg.com/736x/64/00/b4/6400b4af9245985740636ea4b9da8738.jpg",
    "https://i.pinimg.com/736x/fe/05/97/fe0597a3ea4d7f944205c0404ecf201c.jpg",
    "https://i.pinimg.com/736x/36/ef/c9/36efc9a3cd29339ee166c146db834184.jpg",
    "https://i.pinimg.com/736x/b0/27/74/b027746b073893ec1b93a3fcbc9e8ae0.jpg",
    "https://i.pinimg.com/736x/f7/bc/39/f7bc39c99fe8da475c5a5327340047af.jpg",
    

  ];

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://i.pinimg.com/736x/33/e6/64/33e6642fc8303b003130d479d711e41d.jpg" />
          <div className="my-4 text-xl text-center font-bold">
            WOWWW! I love you so much, pookie!!! 💖 <br />
            Can you wear pink? I’ll fetch you 8pm on Friday. Can’t wait to see you!
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[400px]"
            src={noImages[Math.min(noCount, noImages.length - 1)]}
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
