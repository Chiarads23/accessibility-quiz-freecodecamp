import styles from "./App.module.scss";


function App() {
  return (
    <div className={styles.App}>
      <header>
        <img
          id="logo"
          src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"
          alt='logo'
        />
        <h1>HTML/CSS Quiz</h1>
        <nav>
          <ul>
            <li>
              <a href="#student-info" >
                INFO
              </a>
            </li>
            <li>
              <a href="#html-questions" >
                HTML
              </a>
            </li>
            <li>
              <a href="#css-questions">
                CSS
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <form
          method="post"
          action="https://freecodecamp.org/practice-project/accessibility-quiz"
        >
          <section aria-labelledby="student-info">
            <h2 id="student-info">Student Info</h2>
            <div className={styles.info}>
              <label htmlFor="student-name">Name:</label>
              <input type="text" name="student-name" id="student-name" />
            </div>
            <div className={styles.info}>
              <label htmlFor="student-email">Email:</label>
              <input type="email" name="student-email" id="student-email" />
            </div>
            <div className={styles.info}>
              <label htmlFor="birth-date">
                D.O.B.<span className={styles.srOnly}>(Date of Birth)</span>
              </label>
              <input type="date" name="birth-date" id="birth-date" />
            </div>
          </section>
          <section aria-labelledby="html-questions">
            <h2 id="html-questions">HTML</h2>
            <div className={styles.questionBlock}>
              <p>1</p>
              <fieldset className={styles.question} name="html-question-one">
                <legend>
                  The legend element represents a caption for the content of its
                  parent fieldset element
                </legend>
                <ul className={styles.answersList}>
                  <li>
                    <label htmlFor="q1-a1">
                      <input type="radio" id="q1-a1" name="q1" value="true" />
                      True
                    </label>
                  </li>
                  <li>
                    <label htmlFor="q1-a2">
                      <input type="radio" id="q1-a2" name="q1" value="false" />
                      False
                    </label>
                  </li>
                </ul>
              </fieldset>
            </div>
            <div className={styles.questionBlock}>
              <p>2</p>
              <fieldset className={styles.question} name="html-question-two">
                <legend>
                  A label element nesting an input element is required to have a
                  for attribute with the same value as the input's id
                </legend>
                <ul className={styles.answersList}>
                  <li>
                    <label htmlFor="q2-a1">
                      <input type="radio" id="q2-a1" name="q2" value="true" />
                      True
                    </label>
                  </li>
                  <li>
                    <label htmlFor="q2-a2">
                      <input type="radio" id="q2-a2" name="q2" value="false" />
                      False
                    </label>
                  </li>
                </ul>
              </fieldset>
            </div>
          </section>
          <section aria-labelledby="css-questions">
            <h2 id="css-questions">CSS</h2>
            <div className={styles.formrow}>
              <div className={styles.questionBlock}>
                <label htmlFor="customer">Are you a frontend developer?</label>
              </div>
              <div className={styles.answer}>
                <select name="customer" id="customer" required>
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className={styles.questionBlock}>
                <label htmlFor="css-questions">Do you have any questions:</label>
              </div>
              <div className={styles.answer}>
                <textarea
                  id="open-question"
                  name="open-question"
                  rows="5"
                  cols="24"
                  placeholder="Who is flexbox..."
                ></textarea>
              </div>
            </div>
          </section>
          <button type="submit">Send</button>
        </form>
      </main>
      <footer>
        <address>
          <a href="https://freecodecamp.org">freeCodeCamp</a>
          <br />
          San Francisco
          <br />
          California
          <br />
          USA
        </address>
      </footer>
    </div>
  );
}

export default App;
