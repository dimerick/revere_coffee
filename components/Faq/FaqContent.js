import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import ReactHtmlParser from 'react-html-parser';

class FaqContent extends Component {
    render() {
        return (
            <div className="faq-accordion">
                <Accordion>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {this.props.seccion.titulo}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                        {ReactHtmlParser(this.props.seccion.descripcion)}
                        </AccordionItemPanel>
                    </AccordionItem>
                    
                </Accordion>
            </div>
        );
    }
}

export default FaqContent;
