import React from "react"
import './checklist.scss';
import checklists from './equipment-data.json';


class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ checked: !prevState.checked }));
  }

  render() {
    const { item, type } = this.props;
    const { name } = item;
    const id = name.toLowerCase().replace(/\s*/g, '');

    let inputClass = 'is-checkradio';
    if (type) {
      inputClass += ` is-${type}`;
    }

    return (
      <div className="field">
        <input className={inputClass}
          id={id}
          type="checkbox"
          name={id} />
        <label for={id} className={this.state.checked ? 'checked' : ''} onClick={this.handleClick}>{name}</label>
      </div>
    )
  }
}

const Checklist = ({ list }) => {
  const { title, items, type } = list;
  let headerClassList = 'checklist__header';
  if (type) {
    headerClassList += ` has-background-${type}`;
  }

  return (
    <div className="checklist__block has-background-light">
      <div className={headerClassList}>
        <h4 className="has-text-dark-grey has-text-weight-semibold is-size-5">{title}</h4>
      </div>
      <div className="checklist__body">
        {
          items.map((item, i) => <Checkbox item={item} type={type} key={i} />)
        }
      </div>
    </div>
  )
};

const Checklists = () => {
  const lists = checklists;

  return (
    <div className="columns is-multiline checklist">
      {
        lists.map((list, i) => {
          return (
            <div className="column is-half">
              <Checklist list={list} key={i} />
            </div>
          )
        })
      }
    </div>
  );
};

export default Checklists;