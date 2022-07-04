import React from 'react'

export default function sellPage() {
  return (
    <div style={{ marginTop: "2%" }}>
        <h3 style={{ textAlign: "center" }}>Sell Your Product</h3>
        <div className="sell">
            
            <div className="formDetails">
                <h4>Details about Product</h4>
                <form action="">
                    <label htmlFor="brand"> Brand </label><br />
                    <input  className="inputBoxes " type="text" id="brand" name="brand" /><br />
                    <br />
                    <label  htmlFor="yearpurchased"> Year Purchased</label><br />
                    <input className="inputBoxes" type="text" id="yearpurchased" name="yearpurchased" /><br />
                    <br />
                    <label  htmlFor="description"> Description</label><br />
                    <textarea className="inputBoxesdesc" type="text" id="description" name="description" /><br />

                    <hr />
                    <br />

                    <h4>Set a Price</h4>
                    <label htmlFor="price"> price </label><br />
                    <input  className="inputBoxes " type="text" id="price" name="price" /><br />
                    <br />
                    <input type="submit" value="Post Now"></input>



                    




                </form>
            </div>

        </div>
    </div>
  )
}
