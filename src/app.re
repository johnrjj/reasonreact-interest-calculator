type componentState = {
  principle: string,
  rate: string,
  yearsToGrow: string,
  timesCompoundedPerYear: string,
};

/*
  p (principal) = principal amount
  r (rate) = annual rate of interest
  t (yearsToGrow) = number of years
  n (timesCompoundedPerYear) = number of times it is compounded
*/

let calcInterest (p: float) (r: float) (t: int) (n: float) => 
  (p *. (1.0 +. r/.n) ** (n*.(float t)));

let component = ReasonReact.statefulComponent "App";

let getAmount (p: string) (r: string) (t: string) (n: string) => {
  try ({
    let parsedP = float_of_string p;
    let parsedR = float_of_string r;
    let parsedT = int_of_string t;
    let parsedN = float_of_string n;
    let amount = calcInterest parsedP parsedR parsedT parsedN;
    string_of_float amount;
    }) {
    | _ => "Error"
  };
};

let handleChange source event state _self => {
  let input = (ReactDOMRe.domElementToObj (ReactEventRe.Form.target event))##value;
  ReasonReact.Update {
    switch (source) {
    | "rate" => {
        ...state,
        rate: input,
      }
    | "principle" => {
        ...state,
        principle: input,
      }
    | "yearsToGrow" => {
        ...state,
        yearsToGrow: input,
      }
    | "timesCompoundedPerYear" => {
        ...state,
        timesCompoundedPerYear: input,
      }
    | _ => state
    }
  };
};

let make ::title _children => {
  {
    ...component,
    initialState: fun () :componentState => {
      principle: "1000",
      rate: "0.03",
      yearsToGrow: "10",
      timesCompoundedPerYear: "12"
    },
    render: fun state self => {
      let amount = getAmount state.principle state.rate state.yearsToGrow state.timesCompoundedPerYear;
      <div className="App">
        <div className="App-header"> 
          <h1> 
            (ReasonReact.stringToElement "ReasonReact Interest Calculator") 
          </h1> 
        </div>
        <label>
          (ReasonReact.stringToElement "Principle")
          <input value=(state.principle) onChange=(self.update (handleChange "principle")) />
        </label>
        <label>
          (ReasonReact.stringToElement "Rate")
          <input value=(state.rate) onChange=(self.update (handleChange "rate")) />
        </label>
        <label>
          (ReasonReact.stringToElement "Years to grow")
          <input value=(state.yearsToGrow) onChange=(self.update (handleChange "yearsToGrow")) />
        </label>
        <label>
          (ReasonReact.stringToElement "Total")
          <input value=(amount) readOnly=(Js.true_) />
        </label>
      </div>
    },
  }
};