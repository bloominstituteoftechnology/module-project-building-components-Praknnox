function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    let tupperware= document.createElement('nav')
    links.forEach(link=>{
      let mr=document.createElement('a')
      mr.href=link.href
      mr.title=link.title
      mr.textContent=link.textContent
      tupperware.appendChild(mr)
    })
    return tupperware
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    let flow=document.createElement('div')
    flow.classList.add('learner-card')
    let roster=document.createElement('p')
    roster.textContent=learner.fullName
    let ego=document.createElement('p')
    ego.textContent=`Learner ID: ${learner.id}`
    let rebirth=document.createElement('p')
    rebirth.textContent=`Date of Birth: ${learner.dateOfBirth}`
    let langue=document.createElement('p')
    let tongue=languages.find(lung=>lung.id===learner.favLanguage)
    langue.textContent=`Favorite Language: ${tongue.name}`;
    [roster,ego,rebirth,langue].forEach(p=>{
      flow.appendChild(p)
    })
    flow.addEventListener('click',evt=>{
      document.querySelectorAll('.learner-card').forEach(card=>{
        card.classList.remove('active')
      })
      flow.classList.add('active')
    })
    return flow
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    learners.forEach(learner=>{
      let cado=buildLearnerCard(learner,languages)
      document.querySelector('section').appendChild(cado)
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    let footclan= document.createElement('footer')
    let comp=document.createElement('div')
    comp.className='company-info'
    let annie=document.createElement('p')
    annie.className='company-name'
    annie.textContent=footerData.companyName
    let dress=document.createElement('p')
    dress.className='address'
    dress.textContent=footerData.address
    let male=document.createElement('p')
    male.className='contact-email'
    male.innerHTML=`Email: <a href="mailto${footerData.contactEmail}"> ${footerData.contactEmail}</a>`
    comp.appendChild(annie)
    comp.appendChild(dress)
    comp.appendChild(male)
    footclan.appendChild(comp)
    let socials=document.createElement('div')
    socials.className='social-media'
    for(let indices in footerData.socialMedia){
      let core=document.createElement('a')
      core.href=footerData.socialMedia[indices]
      core.textContent=indices.charAt(0).toUpperCase()+indices.slice(1)
      socials.appendChild(core)
    }
    let year=new Date().getFullYear()
    let cpyright=document.createElement('div')
    cpyright.textContent=`© ${footerData.companyName.toUpperCase()} ${year}`
    footclan.appendChild(socials)
    footclan.appendChild(cpyright)
    return footclan
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here
  document.addEventListener('click',event=>{
    if(event.target===document.querySelector('section')){
      let deck=document.querySelectorAll('.learner-card')
      deck.forEach(card=>card.classList.remove('active'))
    }
  })
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
