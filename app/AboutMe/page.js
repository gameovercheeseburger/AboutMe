import React from 'react';

const Page = () => {
    return (
        <main className="bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen p-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-blue-800">Patrik Santiago</h1>
                    <h2 className="text-2xl text-blue-600 mt-2">Software Engineer</h2>
                    <p className="mt-2 text-gray-700">+1 587-438-2368 | Calgary, AB, Canada | patrikjurgen.santiago@gmail.com</p>
                    <p className="mt-2">
                        <a href="https://www.linkedin.com/in/patrik-j%C3%BCrgen-santiago/" className="text-blue-700 underline mr-4">LinkedIn</a>
                        <a href="https://github.com/gameovercheeseburger" className="text-blue-700 underline">GitHub</a>
                    </p>
                </header>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-4">Professional Summary</h2>
                    <p className="text-gray-700 leading-relaxed">
                        I have over 5 years of professional experience in software development, specializing in backend and full-stack development with a focus on improving functionality and implementing automated testing. My expertise spans a wide range of technologies, including C#, VB.NET, React.js, and Java, among others. Additionally, I have experience in leading teams and training new developers.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-4">Skills & Abilities</h2>
                    <ul className="list-disc pl-8 text-gray-700">
                        <li>C#.NET, VB.NET, JavaScript, Java (Eclipse)</li>
                        <li>SQL (SSIS, MSSQL, MySQL), Oracle PL/SQL</li>
                        <li>React.js, HTML, CSS</li>
                        <li>Agile/Scrum Methodology, SDLC, JIRA</li>
                        <li>Git, SVN, Jenkins, AWS</li>
                        <li>.NET MAUI (MVVM), .NET Blazor</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-4">Experience</h2>
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-blue-700">Outlier (Previously named Remotask) - Prompt Engineer</h3>
                        <p className="text-gray-600">January 2024 – April 2024</p>
                        <ul className="list-disc pl-8 text-gray-700">
                            <li>Developed clear and comprehensive prompts for data annotation tasks.</li>
                            <li>Collaborated with project managers to refine labeling processes.</li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-blue-700">Infor (BV – Data Warehousing) - Full Stack Developer</h3>
                        <p className="text-gray-600">September 2020 – July 2023</p>
                        <ul className="list-disc pl-8 text-gray-700">
                            <li>Enhanced and maintained ETL processes using SQL and VB6.</li>
                            <li>Automated workflows and ensured code modernization.</li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-blue-700">Accenture Inc. - Software Engineer</h3>
                        <p className="text-gray-600">February 2019 – July 2020</p>
                        <ul className="list-disc pl-8 text-gray-700">
                            <li>Integrated customer data using REST APIs and Oracle systems.</li>
                            <li>Developed automated testing programs using Java.</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-4">Education</h2>
                    <p className="text-gray-700"><strong>Southern Alberta Institute of Technology</strong> - Software Development (2023 – 2025)</p>
                    <p className="text-gray-700"><strong>Adamson University</strong> - B.S. Computer Engineering (2012 – 2018)</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-4">Certifications</h2>
                    <ul className="list-disc pl-8 text-gray-700">
                        <li>HackerRank Profile: <a href="https://www.hackerrank.com/profile/paaatjurgen" className="text-blue-700 underline">View Certificates</a></li>
                    </ul>
                </section>
            </div>
        </main>
    );
};

export default Page;
