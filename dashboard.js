document.addEventListener('DOMContentLoaded', () => {
    const presentationList = document.getElementById('presentation-list');
    
    // Add loading state
    presentationList.classList.add('loading');
    
    const presentations = [
        { 
            name: '00 - Intro to Linux', 
            path: '_00_intro_to_linux',
            description: 'Introduction to Linux operating system and basic commands'
        },
        { 
            name: '01 - Intro to Cyberforensics', 
            path: '_01_intro_cyberforensics',
            description: 'Fundamentals of digital forensics and investigation'
        },
        { 
            name: '02 - Python for Cyberforensics', 
            path: '_02_python_for_cyberforensics',
            description: 'Using Python for digital forensics tasks and automation'
        },
        { 
            name: '03 - Python Challenges', 
            path: '_03_python_challenges_cyberforensics',
            description: 'Practical exercises for Python in cyberforensics'
        },
        { 
            name: '04 - Kali Linux', 
            path: '_04_kali_linux_and_technical_concepts',
            description: 'Kali Linux tools and technical concepts'
        },
        { 
            name: '05 - Crime Scene Investigation', 
            path: '_05_crime_scene_investigation',
            description: 'Digital crime scene investigation techniques'
        },
        { 
            name: '06 - Digital Evidence Acquisition', 
            path: '_06_digital_evidence_acquisition',
            description: 'Methods for acquiring digital evidence'
        },
        { 
            name: '07 - Digital Evidence Analysis', 
            path: '_07_digital_evidence_analysis',
            description: 'Analyzing digital evidence'
        },
        { 
            name: '08 - Browser and Email Forensics', 
            path: '_08_browser_and_email_forensics',
            description: 'Forensic analysis of browsers and email'
        },
        { 
            name: '09 - Anti-Forensics', 
            path: '_09_anti_forensics',
            description: 'Understanding and countering anti-forensic techniques'
        },
        { 
            name: '10 - Open Source Intelligence', 
            path: '_10_open_source_intelligence',
            description: 'Gathering intelligence from open sources'
        },
        { 
            name: '11 - Cyberforensics Report', 
            path: '_11_cyberforensics_report',
            description: 'Creating professional forensic reports'
        },
    ];

    // Simulate loading (remove in production)
    setTimeout(() => {
        // Clear loading state
        presentationList.innerHTML = '';
        presentationList.classList.remove('loading');
        
        // Add presentations
        presentations.forEach(presentation => {
            const item = document.createElement('div');
            item.className = 'presentation-item';
            
            const title = document.createElement('h2');
            title.textContent = presentation.name;
            
            const description = document.createElement('p');
            description.textContent = presentation.description;
            
            const link = document.createElement('a');
            link.href = `${presentation.path}/`;
            link.textContent = 'View Presentation';
            
            item.appendChild(title);
            item.appendChild(description);
            item.appendChild(link);
            
            presentationList.appendChild(item);
        });
    }, 800); // Simulate network delay
});
