import React from "react";
import styles from './BoxText.module.scss';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';

// const [written, setwritten] = useState(false);

class BoxText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      written: false
    };
  }
  render() {
    return (
    <div id="app" className= {styles.ContainerBox}>
            <div className= {styles.Containertext}>
                <label className={styles.namePerso}>
                  <Typewriter
                    options={{
                      delay: 20,
                      cursorClassName: 'Cursor-BoxTex',
                    }}
                    onInit={(typewriter => {
                      typewriter
                        .typeString(this.props.namePerso)
                        .callFunction(() => {
                          document.getElementsByClassName('Cursor-BoxTex')[0].style.display = "none";
                          // console.log(cursorlist)
                          this.setState({ written: true })
                        })
                        .start();
                    })}
                  />
                </label>
                <p className={styles.corpsBoxText}>
                  {this.state.written &&
                    <Typewriter
                      options={{
                        delay: 20,
                        cursorClassName: 'Cursor-BoxTex2',
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .typeString(this.props.textBoxContenu)
                          .callFunction(() => {
                            document.getElementsByClassName('Cursor-BoxTex2')[0].style.display = "none";
                            // console.log(cursorlist)
                          })
                          .start();
                      }}
                    />
                  }
                </p>
                
            </div>
    
      </div>
    );
  }
}


BoxText.propTypes = {
    textBoxContenu: PropTypes.string,

  }

 export default BoxText;



// <Typewriter
//   onInit={(typewriter) => {
//     typewriter.typeString('Hello World!')
//       .callFunction(() => {
//         console.log('String typed out!');
//       })
//       .pauseFor(2500)
//       .deleteAll()
//       .callFunction(() => {
//         console.log('All strings were deleted');
//       })
//       .start();
//   }}
// />