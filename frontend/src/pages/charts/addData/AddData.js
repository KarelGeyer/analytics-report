import React, { useRef, useState } from 'react';
import { parse } from 'papaparse';
import axios from 'axios';

import SuccessWrapper from '../../../components/successWrapper/SuccessButton';

import { Section } from '../styles';

const AddData = () => {
  const input = useRef()
  const [csvData, setCsvData] = useState()
  const [converted, setConverted] = useState(false)
  const [uploaded, setUploaded] = useState()
  const linkToExampleTable = 'https://docs.google.com/spreadsheets/d/1fVI9eSGqvW7BA2jmDeUunYB0tLHGaERjiir6NM6Ki7k/edit?usp=sharing'

  const convertCsvToJson = async () => {
    const files = input.current.files

    Array.from(files)
      .forEach(async (file) => {
        try {
          const content = await file.text()
          const parsedContent = parse(content, { headers: true })
          setCsvData(parsedContent)

          csvData ? setConverted(false) : setConverted(true)
        } catch (err) {
          setConverted(false)
        }
      });
  };

  const sendData = () => {
    if (!csvData) {
      return null
    }

    const { data } = csvData;

    if (!data) {
      alert('upload data neuspěl, prosím, zkuste to znovu')
      return
    }

    const formattedData = data.map(row => {
      return row.filter(item => item)
    })

    const user = localStorage.getItem('user');
    const parsedUser = JSON.parse(user);

    axios.post('http://localhost:3027/analytics', {
      formattedData: formattedData,
      user: parsedUser
    })
      .then(res => {
        const { status } = res

        if (status === 201) {
          setUploaded(true)
        } else {
          setUploaded(false)
        }
      })
      .catch(() => setUploaded(false))
  };

  return (
    <Section>
      <div>
        <input type='file' accepts='.csv' ref={input} />
      </div>
      <div>
        <SuccessWrapper success={converted}>
          <button type='button' onClick={convertCsvToJson}>
            Submit
          </button>
        </SuccessWrapper>
        <SuccessWrapper success={uploaded}>
          <button type='button' onClick={sendData}>
            Odeslat
          </button>
        </SuccessWrapper>
      </div>
      <h2>
        Jak nahrát data:
      </h2>
      <p>
        data musí být ve správném formátu, jinak se data neuloží. Je to opatření proti nahrání špatně formátovaných dat, které by mohli poškodit funkcionalitu aplikace
      </p>
      <p>
        pro nahrání dat stačí vyplnit tabulku v excelu nebo v google sheets podle tohoto vzoru -<a href={linkToExampleTable} target='_blank' rel='noreferrer'> klikěnte zde </a> -
      </p>
      <p>
        zde pod textem si můžete zkontrolovat, zda tabulka prošla základní validací
      </p>
      <h3>
        Tabulka úspěšně konvertována: {converted ? 'Ano' : 'Ne'}
      </h3>
      <h3>
        Tabulka úspěšně odeslána: {uploaded ? 'Ano' : 'Ne'}
      </h3>
    </Section>
  )
};

export default AddData;
