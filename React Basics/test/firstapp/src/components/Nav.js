function Nav(props) {
    return (
        <div>
            <nav>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
            </ul>
        </nav>
          {props.greet}
        </div>
        
    );
}

export default Nav;