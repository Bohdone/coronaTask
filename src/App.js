import './App.css';
import {Input, Table} from 'antd';
import {useEffect, useState} from "react";
import axios from "axios";
import MyModal from "./UI/modalWinow/MyModal";
import MyHeader from "./Components/MyHeader";


function App() {

    const [columns, setColumns] = useState([
        {
            title: '№',
            dataIndex: 'Id',
            key: 'Id',
            render: text => <div style={{padding: '10px 0', background: 'transparent'}}>
                <a className='titleTD' onClick={() => {
                    setIsModalVisible(true);
                }}>{text}
                </a></div>,
        },
        {
            title: 'Country',
            dataIndex: 'Country',
            key: 'Country',
            render: text => <div style={{padding: '10px 0', background: 'transparent'}}>
                <a className='titleTD alignStart' onClick={() => {
                    setIsModalVisible(true);
                }}>{text}
                </a></div>,
        },
        {
            title: 'Total Confirmed',
            dataIndex: 'TotalConfirmed',
            key: 'TotalConfirmed',
            render: text => <div style={{padding: '10px 0', background: 'transparent'}}>
                <a className='titleTD alignStart' onClick={() => {
                    setIsModalVisible(true);
                }}>{text}
                </a></div>,

        }])
    const [data, setData] = useState([])
    const [input, setInput] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [selectedId, setSelectedID] = useState()

    useEffect(() => {
        console.log('q')
        axios.get('https://api.covid19api.com/summary').then(response => {
            const d = response.data.Countries.map((response, index) => {
                return {
                    key: index,
                    _id: response.ID,
                    Id: index + 1,
                    Country: response.Country,
                    TotalConfirmed: response.TotalConfirmed,
                    TotalDeaths: response.TotalDeaths,
                    TotalRecovered: response.TotalRecovered
                }
            })
            setData(d)
        })
    }, [])

    const getSerchedData = () => {
        if (!input) {
            return data
        } else {
            return data.filter(d => d.Country.toLowerCase().startsWith(input.toLowerCase()))
        }
    }
    const getSelectedData = (id) => {
        return data.filter(el => el._id === id)[0]
    }

    return (
        <>
            <MyHeader placeholder="Search..."
                      value={input}
                      onChange={e => setInput(e.target.value)}/>
            <MyModal
                getElement={getSelectedData(selectedId)}
                title="Basic Modal"
                visible={isModalVisible}
                setVisible={setIsModalVisible}
            />
            <Table
                columns={columns}
                dataSource={getSerchedData()}
                onRow={dataCell => {
                    return {
                        onClick: event => {
                            setSelectedID(dataCell._id)
                        },
                    };
                }}
            />
        </>

    )
}

export default App;
