'use client';

export default function CopyRightClient() {
    return (
      <div className="py-2 text-center">
        <a href="https://www.payamd.com"
          target="_blank"
          rel="noreferrer"
        >
          payamd.com
        </a>
        {" © "}
        {new Date().getFullYear()}
      </div>
    );
  }
  