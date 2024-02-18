import React, { useState ,useEffect} from 'react'
import styled from 'styled-components'
import { Tabs } from 'antd';
import CustomLayout from '@/components/Layouts'
import ListCard from '@/components/Cards/ListCard'
import axios from 'axios';
import dayjs from 'dayjs'

const { TabPane } = Tabs;

const Home = () => {
    const [activeTab,setActiveTab] = useState<string>('1');
    console.log(activeTab,'check activeTab');

    const handdleTabClick = (tab:any) => {
        console.log(tab,'<===tab');
        setActiveTab(tab);
    }

    return (
      <CustomLayout>
        <TabContainer>
              <Tabs defaultActiveKey="1" onChange={handdleTabClick}>
                <TabPane style={{ padding: '0.5rem' }} tab="Todo" key="1">
                  <TodoList />
                </TabPane>
                <TabPane style={{padding: '0.5rem' }} tab="Doing" key="2">
                  <DoingList />
                </TabPane>
                <TabPane style={{padding: '0.5rem' }} tab="Done" key="3">
                  <DoneList/>
                </TabPane>
              </Tabs>
        </TabContainer>
      </CustomLayout>
    )
}


const TodoList = () => {
  const [todos,setTodos] = useState<any>();
  const [loadData, setLoadData] = useState(10);
  const [loading, setLoadding] = useState(false);

  const handleDelete = (id:any) => {
    console.log(id,'handleDelete id');
    alert('Deleted')
  }

  const fetchGetTodo = async () => {
    setLoadding(true);
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}?offset=0&limit=${loadData}&sortBy=createdAt&isAsc=true&status=TODO`)
        const groupedTodos = response.data.tasks.reduce((acc:any,todo:any) => {
          const date:any = dayjs(todo.createdAt).format('YYYY-MM-DD');
          if(!acc[date]){
            acc[date] = [];
          }
          acc[date].push(todo);
          return acc;
        },{});
        console.log(groupedTodos,'todos');
        setTodos((prevTodos:any) => {
          if(!prevTodos){
            prevTodos = [];
          }
          return { ...prevTodos, ...groupedTodos };
        });
        setLoadData((prevData) => prevData + 1);
    } catch (error) {
        console.log(error, '<= error')
    } finally {
      setLoadding(false);
    }
  }


  useEffect(() => {
    fetchGetTodo();
  }, [])

  const handleScroll = (e:any) => {
    const { scrollTop,clientHeight,scrollHeight } = e.currentTarget;
    if(clientHeight + parseFloat(scrollTop.toFixed())  === scrollHeight && !loading){
      fetchGetTodo();
    }
  }

  if (!todos) {
    return <></>
  }

  return (
      <>
        <div style={{ overflowY : 'auto', height:'800px' }} onScroll={handleScroll}> 
          {Object.entries(todos).map(( [date,datatodo]:any) => (
              <GroupContaniner key={date}>
               <GroupTitle>{dayjs(date).format('YYYY-MM-DD')}</GroupTitle>
                {datatodo.map((todo:any) => (
                  <ListCard key={todo.id} data={todo} onDelete={() => handleDelete(todo.id)}/>
                ))}
              </GroupContaniner>
          ))}
        </div>
      </>
  )
}

const DoingList = () => {
  const [doings,setDoing] = useState<any>();
  const [loadData, setLoadData] = useState(10);
  const [loading, setLoadding] = useState(false);

  const handleDelete = (id:any) => {
    console.log(id,'handleDelete id');
    alert('Deleted')
  }

  const fetchGetDoing = async () => {
    setLoadding(true);
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}?offset=0&limit=${loadData}&sortBy=createdAt&isAsc=true&status=DOING`)
        const groupedDoing = response.data.tasks.reduce((acc:any,doing:any) => {
          const date:any = dayjs(doing.createdAt).format('YYYY-MM-DD');
          if(!acc[date]){
            acc[date] = [];
          }
          acc[date].push(doing);
          return acc;
        },{});
        console.log(groupedDoing,'todos');
        setDoing((prevTodos:any) => {
          if(!prevTodos){
            prevTodos = [];
          }
          return { ...prevTodos, ...groupedDoing };
        });
        setLoadData((prevData) => prevData + 1);
    } catch (error) {
        console.log(error, '<= error')
    } finally {
      setLoadding(false);
    }
  }


  useEffect(() => {
    fetchGetDoing();
  }, [])

  const handleScroll = (e:any) => {
    const { scrollTop,clientHeight,scrollHeight } = e.currentTarget;
    if(clientHeight + parseFloat(scrollTop.toFixed())  === scrollHeight && !loading){
      fetchGetDoing();
    }
  }

  if (!doings) {
    return <></>
  }

  return (
      <>
        <div style={{ overflowY : 'auto', height:'800px'}} onScroll={handleScroll}> 
          {Object.entries(doings).map(( [date,datadoing]:any) => (
              <GroupContaniner key={date}>
               <GroupTitle>{date}</GroupTitle>
                {datadoing.map((doing:any) => (
                  <ListCard key={doing.id} data={doing} onDelete={() => handleDelete(doing.id)}/>
                ))}
              </GroupContaniner>
          ))}
        </div>
      </>
  )
}

const DoneList = () => {
  const [dones,setDone] = useState<any>();
  const [loadData, setLoadData] = useState(10);
  const [loading, setLoadding] = useState(false);

  const handleDelete = (id:any) => {
    console.log(id,'handleDelete id');
    alert('Deleted')
  }

  const fetchGetDoing = async () => {
    setLoadding(true);
    try {
        const response = await axios.get(`https://todo-list-api-mfchjooefq-as.a.run.app/todo-list?offset=0&limit=${loadData}&sortBy=createdAt&isAsc=true&status=DONE`)
        const groupedDone = response.data.tasks.reduce((acc:any,done:any) => {
          const date:any = dayjs(done.createdAt).format('YYYY-MM-DD');
          if(!acc[date]){
            acc[date] = [];
          }
          acc[date].push(done);
          return acc;
        },{});
        console.log(groupedDone,'todos');
        setDone((prevTodos:any) => {
          if(!prevTodos){
            prevTodos = [];
          }
          return { ...prevTodos, ...groupedDone };
        });
        setLoadData((prevData) => prevData + 1);
    } catch (error) {
        console.log(error, '<= error')
    } finally {
      setLoadding(false);
    }
  }


  useEffect(() => {
    fetchGetDoing();
  }, [])

  const handleScroll = (e:any) => {
    const { scrollTop,clientHeight,scrollHeight } = e.currentTarget;
    if(clientHeight + parseFloat(scrollTop.toFixed())  === scrollHeight && !loading){
      fetchGetDoing();
    }
  }

  if (!dones) {
    return <></>
  }

  return (
      <>
        <div style={{ overflowY : 'auto', height:'800px' }} onScroll={handleScroll}> 
          {Object.entries(dones).map(( [date,datadone]:any) => (
              <GroupContaniner key={date}>
               <GroupTitle>{date}</GroupTitle>
                {datadone.map((done:any) => (
                  <ListCard key={done.id} data={done} onDelete={() => handleDelete(done.id)}/>
                ))}
              </GroupContaniner>
          ))}
        </div>
      </>
  )
}

export default Home

const TabContainer = styled.div`
  display: flex;
  justify-content:center;
`

const GroupContaniner = styled.div`
  margin-bottom:20px;
`

const GroupTitle = styled.div`
  font-size: 0.75rem;
  margin-bottom:10px;
`