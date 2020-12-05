import { Fragment } from 'react';
import BugStats from './views/bugStats'
import BugSort from './views/bugSort';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';

const BugTracker = ({ bugs, toggle, remove, removeClosed, addNew }) => (
    <Fragment>
        <h1>Bug Tracker</h1>
        <hr/>
        <BugStats bugs={bugs} />
        <BugSort/>
        <BugEdit addNew={addNew} />
        <BugList {...{bugs, toggle, remove, removeClosed}} />
    </Fragment>
);

export default BugTracker