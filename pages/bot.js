import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <Head>
          <title>Game Bot</title>
          <meta name="description" content="About Game Bot" />
          <link rel="icon" href="/profile.png" />
        </Head>


        <main className={styles.main}>
          <h1 className={styles.title}>
             <Image className={styles.image} src="/profile.png" alt="Profile Icon"/> Game Bot
          </h1>
          <p className={styles.description}>About Game Bot</p>

        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => window.location.href = 'https://discordgamebot.vercel.app/'}>
            <h2>Main Page</h2>
          </button>
          <button
            className={styles.button}
            onClick={() => window.location.href = 'https://discordgamebot.vercel.app/bot'}>
            <h2>About Game Bot</h2>
          </button>
        </div>
  
          <div className={styles.aboutme}>
<h2>1. Introduction</h2>
<p>   • Name: Game Bot</p>
<p>   • Has Slash Cmds: Yes</p>
<p>   • Has Prefix Cmds: Yes</p>
<p>   • Modmail: No</p>
<p>   • Verified: No</p>
<p>   • Designed with: BDScript</p>

<h2> 2. Owner Information</h2>
<p>   • Name: mrjokester0101</p>
<p>   • Age: 13 years old</p>
<p>   • Email: mrjokester0101@gmail.com</p>
          </div>
  
        </main>
      </div>
    </div>
  );
};

export default Home;
