import React from 'react';
import logo from './img/logo.png';
import './App.scss';

function App() {

	return (

		<div className="App">

			<header>

				<div className="container logo">

					<div className="row justify-content-center">

						<div className="col-12 col-sm-10 col-md-6 col-lg-4">

							<img src={logo} alt="Julio S Torremocha Logo" />

						</div>

					</div>

				</div>

			</header>

			<div className="container" id="hero">

				<div className="row align-items-center">

					<div className="col-12 col-md-6 col-lg-7">
						
						<h1 className='heroTitle'>
							I'm Julio, a Web Developer <span className="transparent">with 4 years of experience <br></br>based in Berlin.</span>
						</h1>
							
						<p className='heroSubtitle'>
							Currently I work at Sony Music Entertainment as a Frontend Developer. I'm really passionate about design, functionality and usability.
						</p>

						<p className='heroSubtitle'>
							I speak fluent English, German and Spanish. When I'm not coding, you can probably find me running, climbing or playing guitar.
						</p>

					</div>
					
					<div className="col-12 d-none d-md-block">
					</div>

				</div>

			</div>
			
			<div className="container section" id="skillset">

				<p className="sectionHeader">My Skillset</p>

				<div className="row">

					<div className="col-12 col-md-4">
						
						<h1 className='mb-5 white'>
							Web Development,<br></br>Interface Design &<br></br>User Experience
						</h1>

					</div>

					<div className="col-12 col-md-8">
						<p className="skillsetText">I really like design, functionality and usability. 
							I enjoy creating effortless user experiences and designing delightful digital products. 
							I always seek new opportunities for cooperation on projects around interesting dashboards, design systems or landing pages.
						</p>
					</div>

				</div>

			</div>

			<div className="container section" id="experience">

				<p className="sectionHeader">Work Experience</p>

				<div className="row">

					<div className="col-12 col-md-4 mb-5">
						
						<h1 className='mb-3 white'>
							Sony Music Entertainment<br></br><span className="transparent">Frontend Developer</span>
						</h1>
							
						<p className=''>
							I build websites using HTML5, CSS3 and JavaScript as well as frameworks like Vue/Nuxt and React.
						</p>

					</div>
					
					<div className="col-12 col-md-4 mb-5">
						
						<h1 className='mb-3 white'>
							Solid White Design & Digital Media<br></br><span className="transparent">Frontend Developer</span>
						</h1>
							
						<p className=''>
							There I developed web apps using React/Redux, HTML5, CSS3 and JavaScript.
						</p>

					</div>
					
					<div className="col-12 col-md-4 mb-5">
						
						<h1 className='mb-3 white'>
							Talleres Sanchez<br></br><span className="transparent">Web Developer, IT Technician</span>
						</h1>
							
						<p className=''>
							I started working at the family company. There I was in charge of everything IT-related.
						</p>

					</div>

				</div>

			</div>

			<div className="container section" id="education">

				<p className="sectionHeader">Education</p>

				<div className="row">

					<div className="col-12 col-md-6 mb-5">
						
						<h1 className='mb-3 white'>
							Bachelor of Science in Computer Science<br></br><span className="transparent">University of Salamanca, Spain</span>
						</h1>

							<ul>
								<li>Major: Web Development, Graphic User Interfaces and Data</li>
								<li>Bachelor Dissertation: “Beer Styles Recommender and Visualization System”</li>
								<li>Dissertation grade: 1.0 (95%)</li>
							</ul>

					</div>
					
					<div className="col-12 col-md-6 mb-5">
						
						<h1 className='mb-3 white'>
						Professional Diploma in Piano Performance<br></br><span className="transparent">Conservatorio Profesional de Música in Salamanca, Spain</span>
						</h1>

					</div>

				</div>

				<div className="row">

					<div className="col-12 col-md-6 mb-5">
						
						<h1 className='mb-3 white'>
							International Scolarship<br></br><span className="transparent">University of Wolverhampton, United Kingdom</span>
						</h1>

					</div>
					
					<div className="col-12 col-md-6 mb-5">
						
						<h1 className='mb-3 white'>
							General Certificate of Education: Science and Technology<br></br><span className="transparent">IES Lucía de Medrano in Salamanca, Spain</span>
						</h1>

					</div>

				</div>

			</div>
					
			<div className="container section" id="contact">

				<p className="sectionHeader">Contact</p>

				<div className="row justify-content-between">

					<div className="col-12 col-md-6">

						<p className='footerText'>
							Now that you know a lot about me, let me know if you are interested in having me in your team :)
						</p>

						<p className='footerText'>
							If so, just drop me a line at <a href="mailto:juliostorremocha@gmail.com">juliostorremocha@gmail.com</a>
						</p>

						<div className="socialContainer">

							<a href="mailto:juliostorremocha@gmail.com">
								<span className="fa-stack socials">
									<i className="fa-regular fa-circle fa-stack-2x"></i>
									<i className="fa-solid fa-envelope fa-stack-1x"></i>
								</span>
							</a>

							<a href="https://www.linkedin.com/in/juliostor" target="_blank" rel="noopener noreferrer">
								<span className="fa-stack socials">
									<i className="fa-regular fa-circle fa-stack-2x"></i>
									<i className="fa-brands fa-linkedin-in fa-stack-1x"></i>
								</span>
							</a>

							<a href="https://twitter.com/juliostor" target="_blank" rel="noopener noreferrer">
								<span className="fa-stack socials">
									<i className="fa-regular fa-circle fa-stack-2x"></i>
									<i className="fa-brands fa-twitter fa-stack-1x"></i>
								</span>
							</a>

							<a href="https://github.com/JulioSTor" target="_blank" rel="noopener noreferrer">
								<span className="fa-stack socials">
									<i className="fa-regular fa-circle fa-stack-2x"></i>
									<i className="fa-brands fa-github fa-stack-1x"></i>
								</span>
							</a>

						</div>

					</div>
					
					<div className="d-none d-md-block col-md-6" id="typewriter">
					</div>

				</div>

			</div>

						
			<footer className="container section" id="footer">

				<div className="row align-items-center">

					<div className="col-12 col-md-6">

						<p>
							Built with ❤️ in Berlin
						</p>

					</div>

					<div className="col-12 col-md-6">

						<img src={logo} alt="Julio S Torremocha Logo" className="logo" />

					</div>

				</div>

			</footer>

		</div>

	);

}

export default App;
