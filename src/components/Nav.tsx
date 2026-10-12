import logo from '../assets/logo-text.png'
const Nav = () => {
    return (
        <nav className='sticky top-0 z-50 border-b border-gray-100 bg-white'>
        <div className='container mx-auto items-center mt-4 mb-4'>
         <div className='flex justify-between items-center'>
            {/* Logo */}
            <img src={logo} alt="" />
            {/* Menu */}
            <ul className='flex gap-4 items-center font-semibold'>
                <li className='text-pink-500'>Home</li>
                <li className='text-gray-500'>Technologies</li>
                <li className='text-gray-500'>Projects</li>
                <li className='text-gray-500'>About</li>
                <li className='text-gray-500'>Contact</li>
            </ul>
            {/* Buttons */}
            <div className='flex gap-4'>
            <button className='btn btn-ghost'>Sign In</button>
            <button className='btn btn-secondary rounded-full'>Sign Up</button>
            </div>
         </div>
        </div>
        </nav>
    
    );
};

export default Nav;

