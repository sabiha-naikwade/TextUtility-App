
export default function About() {

    let mystyle = ({
        
        backgroundColor: 'white',
        border:'2px solid #1d1c1c',
        color:'#454242'
        
    })

    return (
        <div className='container my-5' style={mystyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample" style={mystyle}>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Analyze your text
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count,character count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Free to use
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            TextUtils is a free character tool that provides instant charactercount and word count statistics for a given text.
                            TextUtils reports the number of words and characters.Thus it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            This word counter software works in any web browsers such as chrome,firefox,internet explorer,safari,opera.it suits to count characters in facebook,blog,booksexcel document,pdf document,essays,etc.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
