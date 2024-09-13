import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <Head>
          <title>MrJokester</title>
          <meta name="description" content="About Me" />
          <link rel="icon" href="/profile.png" />
        </Head>


        <main className={styles.main}>
          <h1 className={styles.title}>
             <Image className={styles.image} src="/title.png" alt="Profile Icon"/> MrJokester
          </h1>
          <p className={styles.description}>About Me</p>

        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => window.location.href = 'https://discordgamebot.vercel.app/'}>
            <h2>Main Page</h2>
          </button>
          <button
            className={styles.button}
            onClick={() => window.location.href = 'https://discordgamebot.vercel.app/bot'}>
            <h2>About Me</h2>
          </button>
        </div>
  
          <div className={styles.aboutme}>
<h2>1. Introduction</h2>
<p>   • Name: Game Bot</p>
<p>   • Has Slash Cmds: Yes</p>
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
