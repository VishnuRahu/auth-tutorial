import {LoginForm} from "@/components/auth/login-form"
import {BoardList} from "@/app/dashboard/_components/sidebar/tasklist"

const DashboardPage=()=>{
    return(
        <BoardList
          title={"hello"}
          description={"hi"}
        />
        
    )
}

export default DashboardPage;