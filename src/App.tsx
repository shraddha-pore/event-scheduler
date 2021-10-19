
import * as React from 'react';

import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, DragAndDrop, Resize, 
  DragEventArgs, ResizeEventArgs, ViewDirective, ViewsDirective, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { ScrollOptions } from '@syncfusion/ej2-react-schedule';
import { Navbar, Container, Row } from 'react-bootstrap';
export default class App extends React.Component<{}, {}> {
  // the below api retrieves data only for june 2017
  private localData: EventSettingsModel = {
    dataSource: [{
      Id: 1,
      EndTime: new Date(2021, 10, 10, 6, 30),
      StartTime: new Date(2021, 10, 10, 4, 0),
      Subject: 'Testing appointment 1',
      IsAllDay: false,
      Recurrencerule: '',
      IsBlock: false
    },
    {
      Id: 2,
      EndTime: new Date(2021, 10, 11, 6, 30),
      StartTime: new Date(2021, 10, 11, 4, 0),
      Subject: 'Testing appointment 2',
      IsAllDay: true,
      Recurrencerule: '',
      IsBlock: true
    },
    {
      Id: 3,
      EndTime: new Date(2021, 10, 13, 6, 30),
      StartTime: new Date(2021, 10, 12, 4, 0),
      Subject: '',
      IsBlock: false
    },
    {
      Id: 4,
      EndTime: new Date(2021, 10, 1, 6, 30),
      StartTime: new Date(2021, 10, 1, 4, 0),
      Subject: 'Testing appointment 3',
      IsAllDay: false,
      Recurrencerule: '',
      IsBlock: false
    },
    {
      Id: 5,
      EndTime: new Date(2021, 10, 2, 6, 30),
      StartTime: new Date(2021, 10, 2, 4, 0),
      Subject: 'Testing appointment 4',
      IsAllDay: true,
      Recurrencerule: '',
      IsBlock: true
    },
    {
      Id: 6,
      EndTime: new Date(2021, 10, 3, 6, 30),
      StartTime: new Date(2021, 10, 3, 4, 0),
      Subject: '',
      IsBlock: false
    }],

    fields: {
      id: 'Id',
      endTime: { name: 'EndTime' },
      startTime: { name: 'StartTime' },
      subject: { name: 'Subject', default: 'No Title is provided' },
      isAllDay: { name: 'IsAllDay' }
    }
  };

  private onDragStart(args: DragEventArgs): void {
    (args.scroll as ScrollOptions).scrollBy = 500;
  }

  private onResizeStart(args: ResizeEventArgs): void {
    (args.scroll as ScrollOptions).scrollBy = 500;
  }

  public render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              React Scheduler
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <ScheduleComponent height='500px' currentView='Week' selectedDate={new Date()} eventSettings={this.localData}
              dragStart={(this.onDragStart.bind(this))} resizeStart={(this.onResizeStart.bind(this))}>
              <ViewsDirective>
                <ViewDirective option="Day" startHour="09:00" endHour="21:00"></ViewDirective>
                <ViewDirective option="Month"></ViewDirective>
                <ViewDirective option="WorkWeek"></ViewDirective>
                <ViewDirective option="Agenda"></ViewDirective>
              </ViewsDirective>
              <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
            </ScheduleComponent>
          </Row>
        </Container>
      </div>
    )
  }
}

