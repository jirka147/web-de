import { useState } from "react";
function App() {
  const [vzory, setVzory] = useState(true);
  const handleVzory = () => setVzory((prevState) => !prevState);

  const [menuClicked, setMenuClicked] = useState(false);
  const [settingsClicked, setSettingsClicked] = useState(false);

  const handleSettingsClicked = () => setMenuClicked((prevState) => !prevState);
  const handleMenuClicked = () => setSettingsClicked((prevState) => !prevState);

  return (
    <>
      <div className="head">
        <div className="settings" onClick={handleSettingsClicked}></div>
        <h1>DEUTSCH</h1>
        <div className="menu" onClick={handleMenuClicked}></div>
      </div>
      {menuClicked && (
        <div className="menu-area">
          <button>all</button>
          <button onClick={handleVzory}>vzory</button>
          <button>pravidla</button>
          <button>spojky</button>
        </div>
      )}
      {settingsClicked && <div className="settings-area"></div>}

      {vzory && (
        <div className="card-group">
          <div className="card">
            <table className="masculine">
              <thead>
                <th colSpan={3}>masculine</th>
              </thead>
              <tbody>
                <tr className="nominative">
                  <td>1.</td>
                  <td>DER</td>
                  <td>EIN</td>
                </tr>
                <tr className="genitive">
                  <td>2.</td>
                  <td>DES (ES)</td>
                  <td>EINES (ES)</td>
                </tr>
                <tr className="dative">
                  <td>3.</td>
                  <td>DEM</td>
                  <td>EINEM</td>
                </tr>
                <tr className="accusative">
                  <td>4.</td>
                  <td>DEN</td>
                  <td>EINEN</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card">
            <table className="feminine">
              <thead>
                <th colSpan={3}>feminine</th>
              </thead>
              <tbody>
                <tr className="nominative">
                  <td>1.</td>
                  <td>DIE</td>
                  <td>EINE</td>
                </tr>
                <tr className="genitive">
                  <td>2.</td>
                  <td>DER</td>
                  <td>EINER</td>
                </tr>
                <tr className="dative">
                  <td>3.</td>
                  <td>DER</td>
                  <td>EINER</td>
                </tr>
                <tr className="accusative">
                  <td>4.</td>
                  <td>DIE</td>
                  <td>EINE</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card">
            <table className="neuter">
              <thead>
                <th colSpan={3}>neuter</th>
              </thead>
              <tbody>
                <tr className="nominative">
                  <td>1.</td>
                  <td>DAS</td>
                  <td>EIN</td>
                </tr>
                <tr className="genitive">
                  <td>2.</td>
                  <td>DES (ES)</td>
                  <td>EINES (ES)</td>
                </tr>
                <tr className="dative">
                  <td>3.</td>
                  <td>DEM</td>
                  <td>EINEM</td>
                </tr>
                <tr className="accusative">
                  <td>4.</td>
                  <td>DAS</td>
                  <td>EIN</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card">
            <table className="pulural">
              <thead>
                <th colSpan={2}>pulural</th>
              </thead>
              <tbody>
                <tr className="nominative">
                  <td>1.</td>
                  <td>DIE</td>
                </tr>
                <tr className="genitive">
                  <td>2.</td>
                  <td>DER</td>
                </tr>
                <tr className="dative">
                  <td>3.</td>
                  <td>DEN</td>
                </tr>
                <tr className="accusative">
                  <td>4.</td>
                  <td>DIE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div className="card-group">
        <div className="card">
          <table>
            <tbody>
              <tr className="nominative">
                <td>1.</td>
                <td>Nominative</td>
              </tr>
              <tr className="genitive">
                <td>2.</td>
                <td>Genitive</td>
              </tr>
              <tr className="dative">
                <td>3.</td>
                <td>Dative</td>
              </tr>
              <tr className="accusative">
                <td>4.</td>
                <td>Accusative</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card">
          <table>
            <tbody>
              <tr className="nominative">
                <td>1.</td>
                <td>Kdo? Co?</td>
                <td>Wer? Was?</td>
              </tr>
              <tr className="genitive">
                <td>2.</td>
                <td>Koho? Čeho?</td>
                <td>Wessen?</td>
              </tr>
              <tr className="dative">
                <td>3.</td>
                <td>Komu? Čemu?</td>
                <td>Wem?</td>
              </tr>
              <tr className="accusative">
                <td>4.</td>
                <td>Koho? Co?</td>
                <td>Wen? Was?</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card">
          <table>
            <tbody>
              <tr className="nominative">
                <td>1.</td>
              </tr>
              <tr className="genitive">
                <td>2.</td>
              </tr>
              <tr className="dative">
                <td>3.</td>
                <td>Kde?</td>
                <td>Wo?</td>
              </tr>
              <tr className="accusative">
                <td>4.</td>
                <td>Kam?</td>
                <td>Wohin?</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card-group">
        <div className="card">
          <table>
            <tbody className="dative">
              <tr>
                <td>AUS</td>
                <td>Z</td>
              </tr>
              <tr>
                <td>BEI</td>
                <td>U</td>
              </tr>
              <tr>
                <td>MIT</td>
                <td>S</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card">
          <table>
            <tbody className="accusative">
              <tr>
                <td>OHNE</td>
                <td>BEZ</td>
              </tr>
              <tr>
                <td>FÜR</td>
                <td>PRO</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card-group">
        <div className="card">
          <table>
            <tbody>
              <tr>
                <td>Ich</td>
                <td className="dative">Mir</td>
                <td className="accusative">Mich</td>
              </tr>
              <tr>
                <td>Du</td>
                <td className="dative">Dir</td>
                <td className="accusative">Dich</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
