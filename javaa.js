

const founder = [

      {
        profile_image: "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739216805/members/ebibodzlq8buxkmj7msm.png",
        name: "Deepak Kumar",
        department: "CSE-DS",
        designation: "Founder",
        email_id: "deepakjamui26@gmail.com",
        batch: "2022",
        bio: "Every line of code is a bridge that connects ideas with reality, creating experiences that inspire and transform",
        github_url: "https://github.com/deepak-raaaz",
        linkedin_url: "https://linkedin.com/in/deepak-raaaz"
      },

      {
        profile_image: "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739358080/members/udfbwul7pg1ram4zmkld.png",
        name: "Rishabh Kumar",
        department: "ECE",
        designation: "Founder",
        email_id: "rishabhgdsc100@gmail.com",
        batch: "2022",
        bio: "As GDG On Campus HIT Lead Organizer— always striving to turn ideas into innovation, code into impact, and communities into powerhouses.",
        github_url: "https://github.com/",
        linkedin_url: "https://www.linkedin.com/in/rishabh-kumar-5b109a301"
      },

      {
        profile_image: "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739358876/members/lrfcawiul8lobdgpcpgh.png",
        name: "Chinmay Verma",
        department: "ECE",
        designation: "Founder",
        email_id: "chinmayverma1605@gmail.com",
        batch: "2022",
        bio: "Who needs therapy when you can stare at error logs for hours and question your life choices?",
        github_url: "https://github.com/",
        linkedin_url: "https://www.linkedin.com/in/chinmay-verma-90353921b"
      },

      {
        profile_image: "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739385730/members/u5whjuoejrz74v6p5cvw.png",
        name: "Dipankar Saha",
        department: "ECE",
        designation: "Founder",
        email_id: "deeep@gmail.com",
        batch: "2022",
        bio: "As the Video Editor Lead at GDG On Campus HIT, I oversee the creation of engaging video content.",
        github_url: "https://github.com/",
        linkedin_url: "https://www.linkedin.com/in/dipankar-saha-8725b4222/"
      },

      {
        profile_image: "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739803218/members/yg3nkhzbovx77mbotnak.png",
        name: "Ankush Panja",
        department: "CSE-DS",
        designation: "Founder",
        email_id: "panjaankush10@gmail.com",
        batch: "2022",
        bio: "Leadership is about inspiring others, fostering collaboration, and creating impact.",
        github_url: "https://github.com/Ankushgit-hub",
        linkedin_url: "https://www.linkedin.com/in/ankush-panja"
      },

      {
        profile_image: "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739462788/members/a1siupe0gfk4rguskap8.png",
        name: "Aarohini",
        department: "ECE",
        designation: "Founder",
        email_id: "aarohini@gmail.com",
        batch: "2022",
        bio: "As the Content Writing Lead at GDG HIT, I craft engaging content and posts for the developer community.",
        github_url: "https://github.com/Aarohini",
        linkedin_url: "https://www.linkedin.com/in/aarohini-81b3702ba/"
      },

      {
        profile_image: "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739463419/members/owmwzofjshxkbhx37krx.png",
        name: "Arijit Dutta",
        department: "ECE",
        designation: "Founder",
        email_id: "arijit@gmail.com",
        batch: "2022",
        bio: "ECE undergrad | Graphic Design GD Lead @ GDG On Campus HIT | IoT, Robotics & VLSI Enthusiast.",
        github_url: "https://github.com/ArijitDutta96395",
        linkedin_url: "https://www.linkedin.com/in/arijit-dutta-a1bb1a267/"
      },

      {
        profile_image: "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739899643/members/b9r9qeafl1dbrxploqwy.png",
        name: "Rahul Kumar",
        department: "EE",
        designation: "Founder",
        email_id: "rahukkumar@gmail.com",
        batch: "2022",
        bio: "FullStack web developer who prefers backend web development.",
        github_url: "https://github.com/RahulKumar9988",
        linkedin_url: "https://www.linkedin.com/in/rahul-kumar-320aaa325"
      },

      {
        profile_image: "https://res.cloudinary.com/dvlarpnj9/image/upload/v1740020404/members/dpolemc6rsnteveibou2.png",
        name: "Aditya Singh",
        department: "CSE-AI/ML",
        designation: "Founder",
        email_id: "adityasingh@gmail.com",
        batch: "2022",
        bio: "Grinding in silence, winning in public.",
        github_url: "https://github.com/adityashanky",
        linkedin_url: "https://www.linkedin.com/in/aditya-singh-8a9b45244"
      }

    ];


    let body = document.querySelector('#main');

    function componentFunction(){

      let sum = '';

      founder.forEach((e, idx) => {

        sum += `

        <div class="card">

          <nav>
            <p>${e.designation}</p>
            <p>${e.batch}</p>
          </nav>

          <div class="inner">

            <img src="${e.profile_image}" alt="${e.name}">

            <h1>${e.name}</h1>

            <h3>${e.department}</h3>

            <p class="bio">${e.bio}</p>

            <p class="email">${e.email_id}</p>

            <div class="socials">

              <a href="${e.github_url}" target="_blank" class="github">
                GitHub
              </a>

              <a href="${e.linkedin_url}" target="_blank" class="linkedin">
                LinkedIn
              </a>

            </div>

            <button data-idx="${idx}">
              Connect
            </button>

          </div>

        </div>

        `;
      });

      body.innerHTML = sum;
    }

    componentFunction();


    body.addEventListener('click', (d) => {

      if(d.target.tagName === 'BUTTON'){

        let btn = d.target;

        if(btn.innerText === 'Connect'){

          btn.innerText = 'Connected';
          btn.classList.add('connected');

        }
        else{

          btn.innerText = 'Connect';
          btn.classList.remove('connected');

        }

      }

    });
