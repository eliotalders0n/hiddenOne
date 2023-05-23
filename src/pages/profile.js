const Profile = () => {
    return (
        <section className="hero is-fullheight-with-navbar">
            <div className="tile is-ancestor">
                <div className="tile is-vertical">
                    <div className="tile">
                        <div className="tile is-parent is-vertical animate__animated animate__slideInLeft">
                            <article className="tile is-child box" id="q16">
                                <p className="title">EDITORS</p>
                                <p>VS Code<br />
                                    Visual Studio Community Edition<br />
                                    Netbeans 12.6<br />
                                    Android Studio Jetbrains<br />
                                    </p>
                            </article>
                            <article className="tile is-child box" id="q17">
                                <p className="title">Skills</p>
                                <p>Figma<br/>
                                Office Suite<br/>
                                Postman<br/>
                                Linux "Ubuntu" | "Kali" | "Mint". KDE | Debian | Arch<br/>
                                Microsoft Sql Server Manager<br/>
                                Ngrok</p>
                            </article>
                        </div>
                        <div className="tile is-parent animate__animated animate__slideInDown">
                            <article className="tile is-child box" id="q18">
                                <p className="title">TROPHIES</p>
                                <p className="subtitle">Data Hack -4FI- Certificate of participation Country Winner Team Binary</p>
                                <p className="subtitle">Facebook For Developers AI Masterclass Certificate of Attendance "Neural Networks" | "Speech" | "Computer Vision" | "Recurrent Neural Networks"</p>
                                <p className="subtitle">Waka Time Code Hours <br /><br /><a href="https://wakatime.com/@3cc29f21-d026-475a-a28f-a86786654c5a"><img src="https://wakatime.com/badge/user/3cc29f21-d026-475a-a28f-a86786654c5a.svg" alt="Total time coded since Nov 2 2021" /></a>
                                <br/>
                                "Your most active day was Mon Aug 22nd with<br/> 12 hrs 12 mins of activity".
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent animate__animated animate__slideInLeft">
                        <article className="tile is-child box" id='laptop'>
                            <p className="title">NEVER</p>
                            <p className="subtitle">Move without my Laptop</p>
                            <div className="content">
                                <p>------------------<br />
                                    System Information<br />
                                    ------------------<br />
                                    Time of this report: 4/25/2022, 14:19:51<br />
                                    Operating System: Windows 11 Home 64-bit (10.0, Build 22000)<br />
                                    System Model: HP 240 G6 Notebook PC<br />
                                    Processor: Intel(R) Core(TM) i3-7020U CPU @ 2.30GHz (4 CPUs), ~2.3GHz<br />
                                    Memory: 16384MB RAM<br />
                                    DirectX Version: DirectX 12
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Profile;