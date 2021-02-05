import React,{Component} from 'react';
export default class App extends Component{
    constructor(){
        super();
        this.state={
            formInputData:"",
            storeData:[]
        }
    }
    storeInputData=(event1)=>{
        this.setState({
            formInputData:event1.target.value
        })
    }
    storeFinalData=()=>{
        this.setState({
            storeData:[...this.state.storeData,this.state.formInputData]
        })
    }
    // deleting an item from array
    deletestoreData=(event2)=>{
        var temptData=this.state.storeData;
         if(window.confirm("Are you sure ?")==true){
             temptData.splice(Number(event2.target.id),1)
             this.setState({
                 storeData:temptData
             })
         }
    }

    render(){
        return(
            <div className="row">
                {/* First column */}
                <div className="col-lg-5 col-md-10">
                  <div className="card mt-3">
                      <div className="card-body">
                          <form>
                              <input type="text" className="form-control" placeholder="Add data..." onKeyUp={(inputEvent)=>{this.storeInputData(inputEvent)}}/>
                              <br/>
                              <button type="button" className="btn btn-primary" onClick={this.storeFinalData}>Add data </button>
                          </form>
                      </div>

                  </div>
                </div>
                {/* second column */}
                <div className="col-lg-5 col-md-10">
                <div className="card mt-3">
                      <div className="card-body">
                      <ul className="list-group">{this.state.storeData.map((item,index)=>(
                              <li className="list-group-item" key={index}>{item}<button className="btn btn-danger" id={index} onClick={(deleteEvent)=>this.deletestoreData(deleteEvent)}>delete</button></li>
        ))}</ul>
 
                      </div>

                  </div>
                </div>
            </div>
        )
    }
}