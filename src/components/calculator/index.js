import React from 'react';
import Draggable from 'react-draggable';

const windowPosition = { x: 100, y: 100 };

const Calculator = ({ hasDraggedWindowPosition }) => {
    return (
        <Draggable
            handle=".calc-modal-handle"
            defaultPosition={{ x: windowPosition.x, y: windowPosition.y }}
            position={
                hasDraggedWindowPosition ? { x: windowPosition.x, y: windowPosition.y } : null
            }
        >
            <div style={{ transform: windowPosition }}>
                <div id="modal" className="modal-window" style={{ transform: windowPosition }}>
                    <div className="modal-window-inner-border">
                        <div className="modal-body">
                            <div className="calc-modal-handle">---drop---</div>
                            <div className="modal-content">
                                <div className="calculator-keys"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Draggable>
    );
};

export default Calculator;
