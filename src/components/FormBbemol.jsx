import styles from './Form.module.css'; // Certifique-se de que o arquivo CSS é importado corretamente
import React, { useState, useEffect } from 'react';

export function FormBbemol() {
  const rows = [
    { tonal: '1/2',   Seg: '', Ter: 'X', Qua: 'X', Qui: 'X', Sex: 'X', Set: 'X', Oit: 'X' },
    { tonal: '1',     Seg: '', Ter: 'X', Qua: 'X', Qui: 'X', Sex: 'X', Set: 'X', Oit: 'X' },
    { tonal: '1 1/2', Seg: '', Ter: '', Qua: 'X', Qui: 'X', Sex: 'X', Set: 'X', Oit: 'X' },
    { tonal: '2',     Seg: 'X', Ter: '', Qua: '', Qui: 'X', Sex: 'X', Set: 'X', Oit: 'X' },
    { tonal: '2 1/2', Seg: 'X', Ter: 'X', Qua: '', Qui: 'X', Sex: 'X', Set: 'X', Oit: 'X' },
    { tonal: '3',     Seg: 'X', Ter: 'X', Qua: '', Qui: '', Sex: 'X', Set: 'X', Oit: 'X' },
    { tonal: '3 1/2', Seg: 'X', Ter: 'X', Qua: 'X', Qui: '', Sex: 'X', Set: 'X', Oit: 'X' },
    { tonal: '4',     Seg: 'X', Ter: 'X', Qua: 'X', Qui: '', Sex: '', Set: 'X', Oit: 'X' },
    { tonal: '4 1/2', Seg: 'X', Ter: 'X', Qua: 'X', Qui: 'X', Sex: '', Set: '', Oit: 'X' },
    { tonal: '5',     Seg: 'X', Ter: 'X', Qua: 'X', Qui: 'X', Sex: 'X', Set: '', Oit: 'X' },
    { tonal: '5 1/2', Seg: 'X', Ter: 'X', Qua: 'X', Qui: 'X', Sex: 'X', Set: '', Oit: 'X' },
    { tonal: '6',     Seg: 'X', Ter: 'X', Qua: 'X', Qui: 'X', Sex: 'X', Set: 'X', Oit: '' },
  ];

  const seg = ['Cb', 'C', 'C#'];
  const ter = ['null', 'null', 'Db', 'D'];
  const qua = ['null', 'null','null', 'Ebb', 'Eb', 'E'];
  const qui = ['null', 'null','null', 'null', 'null', 'Fb', 'F', 'F#'];
  const sex = ['null', 'null','null', 'null', 'null','null', 'null', 'Gb', 'G'];
  const set = ['null', 'null','null', 'null', 'null','null', 'null','null','Abb', 'Ab', 'A'];
  const oit = ['null', 'null','null', 'null', 'null','null', 'null','null','null','null','null','Bb'];

  const initialRowData = rows.map((row) => ({
    tonal: row.tonal,
    Seg: row.Seg,
    Ter: row.Ter,
    Qua: row.Qua,
    Qui: row.Qui,
    Sex: row.Sex,
    Set: row.Set,
    Oit: row.Oit,
    SegValid: row.Seg === '' ? null : false,
    TerValid: row.Ter === '' ? null : false,
    QuaValid: row.Qua === '' ? null : false,
    QuiValid: row.Qui === '' ? null : false,
    SexValid: row.Sex === '' ? null : false,
    SetValid: row.Set === '' ? null : false,
    OitValid: row.Oit === '' ? null : false,
  }));

  const [rowData, setRowData] = useState(initialRowData);

  const validateInput = (index, column, value) => {
    switch (column) {
      case 'Seg':
        return value === seg[index];
      case 'Ter':
        return value === ter[index];
      case 'Qua':
        return value === qua[index];
      case 'Qui':
        return value === qui[index];
      case 'Sex':
        return value === sex[index];
      case 'Set':
        return value === set[index];
      case 'Oit':
        return value === oit[index];
      default:
        return false;
    }
  };

  const handleInputChange = (index, column, value) => {
    const updatedRowData = rowData.map((data, idx) => {
      if (idx === index) {
        const isValid = validateInput(index, column, value);
        return {
          ...data,
          [column]: value,
          [`${column}Valid`]: isValid,
        };
      }
      return data;
    });

    setRowData(updatedRowData);
  };

  return (
    <div className={styles.formulario}>
      <table className={styles.escada}>
        <thead>
          <tr>
            <th>B♭(S♭)</th>
            <th>Seg</th>
            <th>Ter</th>
            <th>Qua</th>
            <th>Qui</th>
            <th>Sex</th>
            <th>Set</th>
            <th>Oit</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((data, index) => (
            <tr key={index}>
            <td>{data.tonal}</td>
            <td>
              <textarea
                rows="1"
                cols="10"
                value={data.Seg === 'X' ? '' : data.Seg}
                onChange={(e) => handleInputChange(index, 'Seg', e.target.value)}
                disabled={data.Seg === 'X'}
                className={data.Seg === 'X' ? styles.disabledTextarea : ''}
                style={{ backgroundColor: data.SegValid ? '#d4edda' : 'white' }}
              />
            </td>
            <td>
              <textarea
                rows="1"
                cols="10"
                value={data.Ter === 'X' ? '' : data.Ter}
                onChange={(e) => handleInputChange(index, 'Ter', e.target.value)}
                disabled={data.Ter === 'X'}
                className={data.Ter === 'X' ? styles.disabledTextarea : ''}
                style={{ backgroundColor: data.TerValid ? '#d4edda' : 'white' }}
              />
            </td>
            <td>
              <textarea
                rows="1"
                cols="10"
                value={data.Qua === 'X' ? '' : data.Qua}
                onChange={(e) => handleInputChange(index, 'Qua', e.target.value)}
                disabled={data.Qua === 'X'}
                className={data.Qua === 'X' ? styles.disabledTextarea : ''}
                style={{ backgroundColor: data.QuaValid ? '#d4edda' : 'white' }}
              />
            </td>
            <td>
              <textarea
                rows="1"
                cols="10"
                value={data.Qui === 'X' ? '' : data.Qui}
                onChange={(e) => handleInputChange(index, 'Qui', e.target.value)}
                disabled={data.Qui === 'X'}
                className={data.Qui === 'X' ? styles.disabledTextarea : ''}
                style={{ backgroundColor: data.QuiValid ? '#d4edda' : 'white' }}
              />
            </td>
            <td>
              <textarea
                rows="1"
                cols="10"
                value={data.Sex === 'X' ? '' : data.Sex}
                onChange={(e) => handleInputChange(index, 'Sex', e.target.value)}
                disabled={data.Sex === 'X'}
                className={data.Sex === 'X' ? styles.disabledTextarea : ''}
                style={{ backgroundColor: data.SexValid ? '#d4edda' : 'white' }}
              />
            </td>
            <td>
              <textarea
                rows="1"
                cols="10"
                value={data.Set === 'X' ? '' : data.Set}
                onChange={(e) => handleInputChange(index, 'Set', e.target.value)}
                disabled={data.Set === 'X'}
                className={data.Set === 'X' ? styles.disabledTextarea : ''}
                style={{ backgroundColor: data.SetValid ? '#d4edda' : 'white' }}
              />
            </td>
            <td>
              <textarea
                rows="1"
                cols="10"
                value={data.Oit === 'X' ? '' : data.Oit}
                onChange={(e) => handleInputChange(index, 'Oit', e.target.value)}
                disabled={data.Oit === 'X'}
                className={data.Oit === 'X' ? styles.disabledTextarea : ''}
                style={{ backgroundColor: data.OitValid ? '#d4edda' : 'white' }}
              />
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
