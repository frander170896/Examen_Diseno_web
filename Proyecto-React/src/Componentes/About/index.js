// Dependencies
import React, { Component } from 'react';
import about_us from "../Global/images/About.jpg";

class About extends Component {
    render() {
        return (
                <div className="About">
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={about_us} className="img-thumbnail imgheader" alt="about us" />
                        </div>
                        <div className='col-md-6'>
                            <h1>About us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum, urna nec dapibus laoreet, nisi augue tristique nibh, ac sodales dolor leo quis lacus. Nullam sit amet imperdiet erat. Mauris gravida suscipit velit, ut faucibus velit dictum a. Proin tempor nibh lorem, eget commodo risus cursus sit amet. Proin eget luctus lacus. Nulla euismod, urna a scelerisque varius, nibh sapien laoreet neque, tristique posuere odio arcu eu leo. Integer dictum, enim ut pulvinar laoreet, justo ante imperdiet nisi, vel venenatis diam ipsum vitae odio. Nunc congue, diam eu placerat dapibus, tortor augue efficitur augue, ut luctus dolor nisi vitae eros. Maecenas ac aliquam ante, ac mollis orci. Sed tincidunt libero at iaculis egestas. Nunc lorem dolor, pulvinar eu ullamcorper non, viverra sit amet diam. Praesent vel elit sed eros mollis vehicula vel at ipsum. Nam a eros justo. Praesent non commodo purus.
                
                                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec viverra, ante a gravida iaculis, nulla urna interdum sem, ac laoreet felis justo quis est. </p>
                        </div>
                    </div>
                </div>
                );
    }
}

export default About;
