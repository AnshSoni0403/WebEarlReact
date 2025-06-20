import React from 'react';
import Image from 'next/image';

const ChatIcons = () => {
  return (
    <>
      {/* Messenger Chat */}
      <section className="messenger-chat">
        <div>
          <a 
            href="https://www.facebook.com/messages/t/437017136395453" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Chat with us on Messenger"
          >
            <Image 
              src="/img/messenger-logo.png" 
              alt="Chat with us on Messenger" 
              width={50} 
              height={50}
              className="img-fluid"
              priority
            />
          </a>
        </div>
      </section>

      {/* WhatsApp Chat */}
      <section className="whatsapp-chat">
        <div>
          <a 
            href="https://web.whatsapp.com/send?phone=919033251903" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
          >
            <Image 
              src="/img/WhatsApp.png" 
              alt="Chat with us on WhatsApp" 
              width={50} 
              height={50}
              className="img-fluid"
              priority
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default ChatIcons;
