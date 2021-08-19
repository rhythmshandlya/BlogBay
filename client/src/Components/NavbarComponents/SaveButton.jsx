import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecycle, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useEffect  } from 'react';

const SaveButton = () => {
    return (
        <button class="button_save_editor">
            <span class="submit_save_editor">Submit</span>
            <span class="loading_save_editor"><FontAwesomeIcon icon={faRecycle} /></span>
            <span class="check_save_editor"><FontAwesomeIcon icon={faCheck} /></span>
        </button>
    );
}

export default SaveButton;
