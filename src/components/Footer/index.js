import React from 'react'

const Footer = () => {
    return (
        <footer style = {{backgroundColor: "#1f5aa5"}} className="page-footer">
            <div className="container center">
                <div className="row">
                    <div className="col s12">
                        <p className="grey-text text-darken-3"></p>
                        <a href='https://github.com/smurphy7326/good-react-portfolio' target="_blank" rel="noreferrer"i class="fab fa-github-square fa-3x"></a>
                        <a href='https://www.linkedin.com/in/sean-murphy-08a45a37/' target="_blank" rel="noreferrer" i class="fas fa-paper-plane fa-3x"></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer