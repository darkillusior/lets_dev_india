import Task1 from '@/components/Task1'
import React from 'react'
import { useRouter } from "next/router";
import Task2 from '@/components/Task2';
import Task3 from '@/components/Task3';

function Tasks({user}) {
    const router = useRouter();
    const query = router.query;
    const name = query.name;
  return (
  <>
 
  
{name==='0'&&<Task1 user={user}/>}
{name==='1'&&<Task2 user={user}/>}
{name==='2'&&<Task3 user={user}/>}
  
  </>
  )
}

export default Tasks