import React from "react";
import ContactCard from "../../components/card/ContactCard";
import styles from "../../styles/pages/servicepage.module.css";

function webDevelopment() {
  return (
    <div>
      <div className={styles.hero}>
        <div>
          <h1>Website Audits</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est
            libero temporibus alias enim beatae fugit eveniet vel, obcaecati
            eaque deserunt, numquam consequuntur placeat quisquam autem.
          </h2>
        </div>
      </div>

      <div className="containertext">
        <div className={styles.content}>
          <h3>What is This?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            minima alias architecto asperiores! Amet ea, obcaecati voluptatibus,
            facere, dolore at deserunt dignissimos corrupti dolorem dolor quidem
            tempora aspernatur hic dicta?
          </p>

          <h3>Why This is Important</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            minima alias architecto asperiores! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Earum non debitis, beatae unde
            excepturi labore! Optio sint dolorem incidunt ipsam harum cum? Optio
            atque quibusdam adipisci? Non ipsam iure rerum?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            minima alias architecto asperiores! Amet ea, obcaecati voluptatibus,
            facere, dolore at deserunt dignissimos corrupti dolorem dolor quidem
            tempora aspernatur hic dicta?
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <ContactCard />
      </div>
    </div>
  );
}

export default webDevelopment;