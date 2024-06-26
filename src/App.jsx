import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleSelectedGood = good => {
    setSelectedGood(good);
  };

  const handleClearSelection = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      {!selectedGood ? (
        <h1 className="title">No goods selected</h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => handleClearSelection()}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  good === selectedGood ? 'has-background-success-light' : ''
                }
              >
                <td>
                  {selectedGood !== good && (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => handleSelectedGood(good)}
                    >
                      +
                    </button>
                  )}
                  {selectedGood === good && (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => handleClearSelection()}
                    >
                      -
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
