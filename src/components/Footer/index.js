import React from 'react'

const Footer = () => {
    return (
        <footer style = {{backgroundColor: "#1f5aa5"}} className="page-footer">
            <div className="container center">
                <div className="row">
                    <div className="col s12">
                        <p className="icons-footer"></p>
                        <a href='https://github.com/smurphy7326/good-react-portfolio' target="_blank" rel="noreferrer"i class="fab fa-github-square fa-4x col s6"></a>
                        <a href='https://www.linkedin.com/in/sean-murphy-08a45a37/' target="_blank" rel="noreferrer" i class="fab fa-linkedin-in fa-4x col s6"></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer