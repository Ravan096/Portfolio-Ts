import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';


interface Message {
    id: number;
    text: string;
    sender: "user" | "bot";
    timestamp: string;
}

const Chatbot = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Enhanced response system
    const getBotResponse = (userMessage: string) => {
        const lowerMessage = userMessage.toLowerCase().trim();

        // Greetings
        if (/^(hello|hi|hey|greetings|good morning|good afternoon|good evening|yo|what's up|howdy)/i.test(lowerMessage)) {
            const greetings = [
                "Hello! 👋 Thanks for visiting my portfolio. How can I help you today?",
                "Hi there! Welcome to my portfolio. What would you like to know about my work?",
                "Hey! Great to see you here. I'm here to tell you about my projects and experience.",
                "Hello! I'm the portfolio assistant. How can I help you explore my work?"
            ];
            return greetings[Math.floor(Math.random() * greetings.length)];
        }

        // Projects
        if (/(project|work|portfolio|app|application|website|build|created|developed)/i.test(lowerMessage)) {
            const projects = [
                "I've worked on real client projects, including a crypto platform with real-time prices, multi-currency selection, and live charts.",
                "I built a monitoring tool that handles 100,000+ records in real-time, displaying interactive graphs with Highcharts to provide detailed insights.",
                "I've developed e-commerce platforms and social media applications with real-time chat, delivering robust full-stack solutions.",
                "From front-end interfaces to back-end services, I've created solutions that solve real problems for clients, showcasing my full-stack capabilities using React, Node.js, and MongoDB.",
                "My projects include building responsive websites, REST APIs, and interactive dashboards for real-world applications.",
                "I created solutions that manage large datasets efficiently and visualize them in real time, helping clients make informed decisions.",
                "I have experience working on applications that provide live updates and dynamic content for users, such as crypto trackers and social media platforms.",
                "Each project I take on, whether e-commerce, monitoring tools, or real-time applications, is designed to solve practical problems while providing a smooth user experience.",
                "I enjoy building full-stack applications that combine modern technologies and client requirements into real, usable solutions."
            ];
            return projects[Math.floor(Math.random() * projects.length)];
        }

        // Skills
        if (/(skill|tech|technology|stack|language|framework|tool|what can you do|what do you know)/i.test(lowerMessage)) {
            const skills = [
                "I am a Full Stack Developer with expertise in React.js, Next.js, Angular, Node.js, and Express.js. I specialize in building scalable web apps and APIs.",
                "My technical stack includes React, Next.js, Node.js, Express, MongoDB, SQL, and cloud platforms like Azure and Vercel. I also work with Redux, Chakra UI, and Tailwind CSS.",
                "I’m experienced in frontend (React, Angular, JavaScript, TypeScript, HTML, CSS, Bootstrap, Material UI) and backend (Node.js, Express, REST APIs) development.",
                "I develop modern, responsive UIs and implement state management with Redux and Context API, focusing on performance and maintainability.",
                "On the backend, I build RESTful APIs, integrate MongoDB & SQL databases, and handle authentication and authorization (JWT-based login systems).",
                "I have worked on full-stack projects like social media platforms and e-commerce apps, implementing real-time chat, product management, and secure user flows.",
                "Beyond coding, I have DevOps and cloud deployment experience — deploying apps on Azure, Vercel, and integrating CI/CD pipelines.",
                "I’m comfortable working in Agile environments, collaborating across teams, and delivering clean, maintainable, and scalable code."
            ];
            return skills[Math.floor(Math.random() * skills.length)];
        }

        // Experience
        if (/(experience|background|career|job|history|worked|previous|past)/i.test(lowerMessage)) {
            const experience = [
                "I have experience in developing scalable and cloud-ready applications, with deployments on Azure and Vercel ensuring high availability and performance.",
                "My background includes both individual and collaborative projects, focusing on clean code, reusable components, and best practices in software engineering.",
                "I've contributed to full-stack projects involving modern frontend frameworks (React, Next.js, Angular), backend API design (Node.js, Express), and database optimization (MongoDB, SQL).",
                "I’ve implemented authentication systems, state management, and SEO optimization in production-ready applications while ensuring great user experiences.",
                "Throughout my career, I’ve focused on creating efficient, maintainable, and scalable solutions while staying updated with the latest technologies and methodologies.",
                "I have hands-on experience with DevOps practices, CI/CD pipelines, and cloud infrastructure, bridging the gap between development and deployment.",
                "I’ve worked in Agile environments, collaborating with cross-functional teams to deliver quality software solutions on time and aligned with business goals.",
                "My projects include social media platforms with real-time chat, and e-commerce applications with secure user flows, showcasing both frontend and backend expertise."
            ];
            return experience[Math.floor(Math.random() * experience.length)];
        }

        // Contact
        if (/(contact|email|reach|connect|linkedin|github|hire|job opportunity|collaborat)/i.test(lowerMessage)) {
            const contact = [
                "You can reach out to me directly through the contact form on this site or connect with me on LinkedIn for professional opportunities.",
                "Feel free to send me a message using the contact section. I make sure to respond promptly to all inquiries and collaborations.",
                "Let’s get in touch! My LinkedIn, GitHub, and email are linked in the footer of this portfolio. Looking forward to connecting!",
                "I’m always open to discussing projects, collaborations, or job opportunities. You can contact me via the form here or through my LinkedIn profile.",
                "For quick communication, you can email me at guptalakshman96.lg@gmail.com or connect with me on LinkedIn.",
                "You’ll find all my professional links, including LinkedIn and GitHub, at the bottom of this site. I’d be happy to hear from you!",
                "Interested in working together? Use the contact form or connect with me on LinkedIn to start the conversation.",
                "Let’s collaborate! You can drop me a message here, or reach me via LinkedIn and GitHub — links are available in the footer."
            ];
            return contact[Math.floor(Math.random() * contact.length)];
        }

        // About/Introduction
        if (/(who are you|what are you|about you|introduce|tell me about)/i.test(lowerMessage)) {
            const about = [
                "I'm the interactive assistant for this portfolio, here to share details about the developer’s skills, projects, and professional journey.",
                "Think of me as your guide to this website — I can walk you through the developer’s background, experience, and technical expertise.",
                "I’m a portfolio chatbot designed to answer your questions about the developer, from skills and certifications to projects and achievements.",
                "I’m here to make exploring this portfolio easier by providing quick insights into the developer’s work, technical stack, and experience.",
                "I serve as a virtual assistant for this portfolio, helping you discover more about the developer’s projects, skills, and career highlights.",
                "My role is to assist you in learning about the developer — whether it’s frontend, backend, or full-stack experience, I’ve got you covered.",
                "I’m here to provide instant answers about the developer’s capabilities, recent work, and technologies used throughout their career.",
                "I act as a friendly guide for this portfolio, ensuring you find everything you need about the developer’s professional journey and expertise."
            ];
            return about[Math.floor(Math.random() * about.length)];
        }

        if (/(achievement|award|recognition|appreciation|praise|client feedback)/i.test(lowerMessage)) {
            const achievements = [
                "I’ve received multiple client appreciations for delivering projects ahead of schedule and exceeding expectations.",
                "Several clients have praised my attention to detail, communication skills, and ability to deliver high-quality solutions.",
                "I’ve been recognized by clients for building scalable, reliable applications that improved their business processes.",
                "Client appreciation has been a motivating factor for me, and I take pride in maintaining long-term professional relationships."
            ];
            return achievements[Math.floor(Math.random() * achievements.length)];
        }

        if (/(price|pricing|cost|rate|charges|freelance|hire|availability)/i.test(lowerMessage)) {
            const pricing = [
                "I am available for freelancing and project-based work. Pricing depends on the scope and complexity of the project — feel free to share details through the contact form.",
                "Yes, I take on freelance projects! My rates are flexible and depend on the type of work required. Let's discuss your requirements.",
                "I’m open to new opportunities including freelancing and remote work. Please contact me with your project details for a custom quote.",
                "For freelancing or hiring inquiries, you can connect with me via the contact form or LinkedIn. I’ll be happy to provide pricing information after understanding your project."
            ];
            return pricing[Math.floor(Math.random() * pricing.length)];
        }

        if (/(certification|certified|microsoft|course|exam)/i.test(lowerMessage)) {
            const certs = [
                "I’m a Microsoft Certified Developer with credentials like Azure Developer Associate (AZ-204) and DevOps Engineer Expert.",
                "I hold certifications in React.js and Microsoft Azure, which validate my expertise in both frontend development and cloud engineering.",
                "As a Microsoft Certified Professional, I bring proven skills in building and deploying applications in cloud environments.",
                "My certifications demonstrate my commitment to continuous learning and staying updated with industry standards."
            ];
            return certs[Math.floor(Math.random() * certs.length)];
        }

        if (/(client|worked with|international|usa|spain|overseas)/i.test(lowerMessage)) {
            const clients = [
                "I’ve had the opportunity to work with clients from different parts of the world including the USA, Spain, and India.",
                "My experience includes collaborating with international clients, ensuring smooth communication and delivering high-quality solutions across time zones.",
                "I have successfully delivered projects for multiple clients globally, with positive feedback and repeat collaborations.",
                "Working with diverse clients has helped me adapt quickly to different business needs and cultural contexts."
            ];
            return clients[Math.floor(Math.random() * clients.length)];
        }

        // Thanks
        if (/(thank|thanks|appreciate|grateful)/i.test(lowerMessage)) {
            return "You're welcome! I'm glad I could help. Feel free to ask if you have any more questions about my work or experience.";
        }

        // Help
        if (/(help|what can i ask|how does this work|what should i ask)/i.test(lowerMessage)) {
            return "You can ask me about: my projects, technical skills, work experience, how to contact me, or general questions about my background. What would you like to know?";
        }

        if (/^(how are you|how's it going|how do you do)\??$/i.test(lowerMessage)) {
            const smallTalk = [
                "I'm fine, thank you! How are you?",
                "Doing great! How about you?",
                "I'm good, thanks for asking! How are you doing today?",
                "All good here! How's your day going?"
            ];
            return smallTalk[Math.floor(Math.random() * smallTalk.length)];
        }


        if (/^(what's up|sup|how's it going|how r u)\??$/i.test(lowerMessage)) {
            const chitChat = [
                "Not much, just helping people explore my portfolio. How about you?",
                "All good here! What about you?",
                "Just chatting with visitors! How's your day going?",
                "Hey! I'm doing well. How about you?"
            ];
            return chitChat[Math.floor(Math.random() * chitChat.length)];
        }

        if (/^(good morning|good afternoon|good evening)/i.test(lowerMessage)) {
            const timeGreetings = [
                "Good morning! How's your day starting?",
                "Good afternoon! How's everything going?",
                "Good evening! Hope you had a great day!"
            ];
            return timeGreetings[Math.floor(Math.random() * timeGreetings.length)];
        }

        if (/^(thank you|thanks|thx)/i.test(lowerMessage)) {
            const thanksResponses = [
                "You're welcome! 😊",
                "No problem! Glad I could help.",
                "Anytime! Happy to assist.",
                "My pleasure!"
            ];
            return thanksResponses[Math.floor(Math.random() * thanksResponses.length)];
        }

        if (/^(bye|goodbye|see you|later)/i.test(lowerMessage)) {
            const goodbyeResponses = [
                "Goodbye! Have a great day!",
                "See you later! Take care!",
                "Bye! Hope to chat again soon.",
                "Take care! 👋"
            ];
            return goodbyeResponses[Math.floor(Math.random() * goodbyeResponses.length)];
        }

        // Default responses
        const defaults = [
            "That's an interesting question! I specialize in discussing my portfolio content. Feel free to ask about my projects, skills, or experience.",
            "I'm here to help you learn about my work. You might ask about my technical stack, recent projects, or professional background.",
            "Thanks for your message! I can tell you more about my development projects, technologies I use, or my experience in software development.",
            "I'd be happy to discuss my portfolio! Try asking about specific projects, technical skills, or my approach to problem-solving.",
            "Great question! As a portfolio assistant, I can share insights about my development work, technical expertise, and project experiences."
        ];
        return defaults[Math.floor(Math.random() * defaults.length)];
    };

    const handleSendMessage = () => {
        if (!inputMessage.trim()) return;

        // Add user message
        const userMessage: Message = {
            id: Date.now(),
            text: inputMessage,
            sender: "user",
            timestamp: new Date().toLocaleTimeString()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');

        // Simulate bot thinking
        setTimeout(() => {
            const botResponse = getBotResponse(inputMessage);
            const botMessage: Message = {
                id: Date.now() + 1,
                text: botResponse,
                sender: "bot",
                timestamp: new Date().toLocaleTimeString()
            };
            setMessages(prev => [...prev, botMessage]);
        }, 500 + Math.random() * 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const suggestedQuestions = [
        "What projects have you worked on?",
        "What are your technical skills?",
        "Tell me about your experience",
        "How can I contact you?"
    ];

    return (
        <div className="chatbot-container">
            {/* Chatbot Button */}
            <button
                className="chatbot-toggle"
                onClick={() => setIsOpen(!isOpen)}
            >
                💬 Chat with me
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h3>Portfolio Assistant</h3>
                        <button onClick={() => setIsOpen(false)}>×</button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.length === 0 ? (
                            <div className="welcome-message">
                                <p>Hello! I'm here to help you learn about my portfolio. Ask me anything!</p>
                                <div className="suggested-questions">
                                    {suggestedQuestions.map((question, index) => (
                                        <button
                                            key={index}
                                            className="suggestion-btn"
                                            onClick={() => setInputMessage(question)}
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            messages.map((message) => (
                                <div key={message.id} className={`message ${message.sender}`}>
                                    <div className="message-content">
                                        <p>{message.text}</p>
                                        <span className="timestamp">{message.timestamp}</span>
                                    </div>
                                </div>
                            ))
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chatbot-input">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask about my projects, skills, or experience..."
                        />
                        <button className='botSend' onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;