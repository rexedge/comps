import './App.css';
import CTAButton from './comps/nav/CTAButton';
import NavBar from './comps/nav/NavBar';

function App() {
	return (
		<div className="">
			<NavBar />
			<CTAButton onClick={() => alert('Button Clicked')} title='Click' />
		</div>
	);
}

export default App;
