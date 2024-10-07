import React, { useRef, useState, useEffect } from "react";
import {
  Page,
  Navbar,
  BlockTitle,
  NavRight,
  Toolbar,
  Block,
  Link,
  Badge,
  List,
  ListItem,
  Icon,
  Button,
  AccordionContent,
  Actions,
  ActionsGroup,
  ActionsLabel,
  ActionsButton,
  BlockHeader,
  BlockFooter,
  f7,
} from "framework7-react";

export default function Test333() {
  const actionsToPopover = useRef(null);
  const buttonToPopoverWrapper = useRef(null);
  const [actionsOneGroupOpened, setActionsOneGroupOpened] = useState(false);
  const [actionsGridOpened, setActionsGridOpened] = useState(false);

  useEffect(() => {
    return () => {
      if (actionsToPopover.current) {
        actionsToPopover.current.destroy();
      }
    };
  }, []);

  const openActionsPopover = () => {
    if (!actionsToPopover.current) {
      actionsToPopover.current = f7.actions.create({
        buttons: [
          {
            text: "Do something",
            label: true,
          },
          {
            text: "Button 1",
            strong: true,
          },
          {
            text: "Button 2",
          },
          {
            text: "Cancel",
            color: "red",
          },
        ],
        // Need to specify popover target
        targetEl:
          buttonToPopoverWrapper.current.querySelector(".button-to-popover"),
      });
    }

    // Open
    actionsToPopover.current.open();
  };
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  const load1 = () => {
    if (isLoading1) return;
    setIsLoading1(true);
    setTimeout(() => {
      setIsLoading1(false);
    }, 4000);
  };
  const load2 = () => {
    if (isLoading2) return;
    setIsLoading2(true);
    setTimeout(() => {
      setIsLoading2(false);
    }, 4000);
  };
  return (
    <Page>
      {/* هذا الاكوردين بكل بسيطة يقوم لي بي انشاء قائمة و اقدر اضغط عليها و يصير زي القائمة المنسدلة */}
      <Navbar title="Accordion and Action Sheet and Badge" backLink />
      <NavRight>
        <Link iconOnly>
          <Icon ios="f7:person_circle_fill" md="material:person">
            <Badge color="red">5</Badge>
          </Icon>
        </Link>
      </NavRight>
      <BlockTitle>List View Accordion</BlockTitle>
      <List strong outlineIos dividersIos insetMd accordionList>
        <ListItem accordionItem title="Lorem Ipsum">
          <AccordionContent>
            <Block>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                elementum id neque nec commodo. Sed vel justo at turpis laoreet
                pellentesque quis sed lorem. Integer semper arcu nibh, non
                mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus,
                vel congue dui sollicitudin. Donec eu arcu dignissim felis
                viverra blandit suscipit eget ipsum.
              </p>
            </Block>
          </AccordionContent>
        </ListItem>
        <ListItem accordionItem title="Nested List">
          <AccordionContent>
            <List>
              <ListItem title="Item 1" />
              <ListItem title="Item 2" />
              <ListItem title="Item 3" />
              <ListItem title="Item 4" />
            </List>
          </AccordionContent>
        </ListItem>
        <ListItem accordionItem title="Integer semper">
          <AccordionContent>
            <Block>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                elementum id neque nec commodo. Sed vel justo at turpis laoreet
                pellentesque quis sed lorem. Integer semper arcu nibh, non
                mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus,
                vel congue dui sollicitudin. Donec eu arcu dignissim felis
                viverra blandit suscipit eget ipsum.
              </p>
            </Block>
          </AccordionContent>
        </ListItem>
      </List>

      <BlockTitle>Opposite Side</BlockTitle>
      <List
        strong
        outlineIos
        dividersIos
        insetMd
        accordionList
        accordionOpposite
      >
        <ListItem accordionItem title="Lorem Ipsum">
          <AccordionContent>
            <Block>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                elementum id neque nec commodo. Sed vel justo at turpis laoreet
                pellentesque quis sed lorem. Integer semper arcu nibh, non
                mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus,
                vel congue dui sollicitudin. Donec eu arcu dignissim felis
                viverra blandit suscipit eget ipsum.
              </p>
            </Block>
          </AccordionContent>
        </ListItem>
        <ListItem accordionItem title="Nested List">
          <AccordionContent>
            <List>
              <ListItem title="Item 1" />
              <ListItem title="Item 2" />
              <ListItem title="Item 3" />
              <ListItem title="Item 4" />
            </List>
          </AccordionContent>
        </ListItem>
        <ListItem accordionItem title="Integer semper">
          <AccordionContent>
            <Block>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                elementum id neque nec commodo. Sed vel justo at turpis laoreet
                pellentesque quis sed lorem. Integer semper arcu nibh, non
                mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus,
                vel congue dui sollicitudin. Donec eu arcu dignissim felis
                viverra blandit suscipit eget ipsum.
              </p>
            </Block>
          </AccordionContent>
        </ListItem>
      </List>

      <Block strong inset>
        <p className="grid grid-cols-2 grid-gap">
          {/* One group, open by changing actionsOneGroupOpened property */}
          <Button fill onClick={() => setActionsOneGroupOpened(true)}>
            One group
          </Button>
          {/*  Two groups, open by "actionsOpen" attribute */}
          <Button fill actionsOpen="#actions-two-groups">
            Two groups
          </Button>
        </p>
        <p>
          {/* Actions Grid, open by changing actionsGridOpened property */}
          <Button fill onClick={() => setActionsGridOpened(true)}>
            Action Grid
          </Button>
        </p>
      </Block>

      <BlockTitle>Action Sheet To Popover</BlockTitle>
      <Block strong inset>
        <p ref={buttonToPopoverWrapper}>
          Action Sheet can be automatically converted to Popover (for tablets).
          This button will open Popover on tablets and Action Sheet on phones:
          <Button
            style={{ display: "inline-block" }}
            className="button-to-popover"
            onClick={openActionsPopover}
          >
            Actions
          </Button>
        </p>
      </Block>

      {/* One Group */}
      <Actions
        opened={actionsOneGroupOpened}
        onActionsClosed={() => setActionsOneGroupOpened(false)}
      >
        <ActionsGroup>
          <ActionsLabel>Do something</ActionsLabel>
          <ActionsButton strong>Button 1</ActionsButton>
          <ActionsButton>Button 2</ActionsButton>
          <ActionsButton color="red">Cancel</ActionsButton>
        </ActionsGroup>
      </Actions>

      {/* Two Groups */}
      <Actions id="actions-two-groups">
        <ActionsGroup>
          <ActionsLabel>Do something</ActionsLabel>
          <ActionsButton strong>Button 1</ActionsButton>
          <ActionsButton>Button 2</ActionsButton>
        </ActionsGroup>
        <ActionsGroup>
          <ActionsButton color="red">Cancel</ActionsButton>
        </ActionsGroup>
      </Actions>

      {/* Grid */}
      <Actions
        grid={true}
        opened={actionsGridOpened}
        onActionsClosed={() => setActionsGridOpened(false)}
      >
        <ActionsGroup>
          <ActionsButton>
            <img
              slot="media"
              src="https://cdn.framework7.io/placeholder/people-96x96-1.jpg"
              width="48"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            <span>Button 1</span>
          </ActionsButton>
          <ActionsButton>
            <img
              slot="media"
              src="https://cdn.framework7.io/placeholder/people-96x96-2.jpg"
              width="48"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            <span>Button 2</span>
          </ActionsButton>
          <ActionsButton>
            <img
              slot="media"
              src="https://cdn.framework7.io/placeholder/people-96x96-3.jpg"
              width="48"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            <span>Button 3</span>
          </ActionsButton>
        </ActionsGroup>
        <ActionsGroup>
          <ActionsButton>
            <img
              slot="media"
              src="https://cdn.framework7.io/placeholder/fashion-96x96-4.jpg"
              width="48"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            <span>Button 4</span>
          </ActionsButton>
          <ActionsButton>
            <img
              slot="media"
              src="https://cdn.framework7.io/placeholder/fashion-96x96-5.jpg"
              width="48"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            <span>Button 5</span>
          </ActionsButton>
          <ActionsButton>
            <img
              slot="media"
              src="https://cdn.framework7.io/placeholder/fashion-96x96-6.jpg"
              width="48"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            <span>Button 6</span>
          </ActionsButton>
        </ActionsGroup>
      </Actions>
      <Toolbar bottom tabbar icons>
        <Link tabLink="#tab-1" tabLinkActive>
          <Icon ios="f7:envelope_fill" md="material:email">
            <Badge color="green">5</Badge>
          </Icon>
          <span className="tabbar-label">Inbox</span>
        </Link>
        <Link tabLink="#tab-2">
          <Icon ios="f7:calendar_fill" md="material:today">
            <Badge color="red">7</Badge>
          </Icon>
          <span className="tabbar-label">Calendar</span>
        </Link>
        <Link tabLink="#tab-3">
          <Icon ios="f7:cloud_upload_fill" md="material:file_upload">
            <Badge color="red">1</Badge>
          </Icon>
          <span className="tabbar-label">Upload</span>
        </Link>
      </Toolbar>

      <List strongIos outlineIos dividersIos>
        <ListItem title="Foo Bar" badge="0">
          <Icon slot="media" icon="icon-f7" />
        </ListItem>
        <ListItem title="Ivan Petrov" badge="ارحب" badgeColor="blue">
          <Icon slot="media" icon="icon-f7" />
        </ListItem>
        <ListItem title="John Doe" badge="5" badgeColor="green">
          <Icon slot="media" icon="icon-f7" />
        </ListItem>
        <ListItem title="Jane Doe" badge="NEW" badgeColor="orange">
          <Icon slot="media" icon="icon-f7" />
        </ListItem>
      </List>
      <BlockTitle>Block Title</BlockTitle>
      <Block>
        <p>
          Here comes paragraph within content block. Donec et nulla auctor massa
          pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae
          mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel,
          sagittis felis.{" "}
        </p>
      </Block>

      <BlockTitle>Strong Block</BlockTitle>
      <Block strong>
        <p>
          Here comes another text block with additional "block-strong" class.
          Praesent nec imperdiet diam. Maecenas vel lectus porttitor,
          consectetur magna nec, viverra sem. Aliquam sed risus dolor. Morbi
          tincidunt ut libero id sodales. Integer blandit varius nisi quis
          consectetur.{" "}
        </p>
      </Block>

      <BlockTitle>Strong Outline Block</BlockTitle>
      <Block strong outline>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          itaque autem qui quaerat vero ducimus praesentium quibusdam veniam
          error ut alias, numquam iste ea quos maxime consequatur ullam at a.
        </p>
      </Block>

      <BlockTitle>Strong Inset Block</BlockTitle>
      <Block strong inset>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.{" "}
        </p>
      </Block>

      <BlockTitle>Strong Inset Outline Block</BlockTitle>
      <Block strong outline inset>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.{" "}
        </p>
      </Block>

      <BlockTitle>Tablet Inset</BlockTitle>
      <Block strong mediumInset>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.{" "}
        </p>
      </Block>

      <BlockTitle>With Header & Footer</BlockTitle>
      <Block>
        <BlockHeader>Block Header</BlockHeader>
        <p>
          Here comes paragraph within content block. Donec et nulla auctor massa
          pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae
          mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel,
          sagittis felis.{" "}
        </p>
        <BlockFooter>Block Footer</BlockFooter>
      </Block>

      <BlockHeader>Block Header</BlockHeader>
      <Block>
        <p>
          Here comes paragraph within content block. Donec et nulla auctor massa
          pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae
          mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel,
          sagittis felis.{" "}
        </p>
      </Block>
      <BlockFooter>Block Footer</BlockFooter>

      <Block strong>
        <BlockHeader>Block Header</BlockHeader>
        <p>
          Here comes paragraph within content block. Donec et nulla auctor massa
          pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae
          mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel,
          sagittis felis.{" "}
        </p>
        <BlockFooter>Block Footer</BlockFooter>
      </Block>

      <BlockHeader>Block Header</BlockHeader>
      <Block strong>
        <p>
          Here comes paragraph within content block. Donec et nulla auctor massa
          pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae
          mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel,
          sagittis felis.{" "}
        </p>
      </Block>
      <BlockFooter>Block Footer</BlockFooter>

      <BlockTitle large>Block Title Large</BlockTitle>
      <Block strong>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.{" "}
        </p>
      </Block>

      <BlockTitle medium>Block Title Medium</BlockTitle>
      <Block strong>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.{" "}
        </p>
      </Block>

      <BlockTitle>Usual Buttons</BlockTitle>
      <Block strong outlineIos>
        <div className="grid grid-cols-3 grid-gap">
          <Button>Button</Button>
          <Button>Button</Button>
          <Button round>Round</Button>
        </div>
      </Block>

      <BlockTitle>Tonal Buttons</BlockTitle>
      <Block strong outlineIos>
        <div className="grid grid-cols-3 grid-gap">
          <Button tonal>Button</Button>
          <Button tonal>Button</Button>
          <Button tonal round>
            Round
          </Button>
        </div>
      </Block>

      <BlockTitle>Fill Buttons</BlockTitle>
      <Block strong outlineIos>
        <div className="grid grid-cols-3 grid-gap">
          <Button fill>Button</Button>
          <Button fill>Button</Button>
          <Button fill round>
            Round
          </Button>
        </div>
      </Block>

      <BlockTitle>Outline Buttons</BlockTitle>
      <Block strong outlineIos>
        <div className="grid grid-cols-3 grid-gap">
          <Button outline>Button</Button>
          <Button outline>Button</Button>
          <Button outline round>
            Round
          </Button>
        </div>
      </Block>

      <BlockTitle>Raised Buttons</BlockTitle>
      <Block strong outlineIos>
        <p className="grid grid-cols-3 grid-gap">
          <Button raised>Button</Button>
          <Button raised fill>
            Fill
          </Button>
          <Button raised outline>
            Outline
          </Button>
        </p>
        <p className="grid grid-cols-3 grid-gap">
          <Button raised round>
            Round
          </Button>
          <Button raised fill round>
            Fill
          </Button>
          <Button raised outline round>
            Outline
          </Button>
        </p>
      </Block>

      <BlockTitle>Large Buttons</BlockTitle>
      <Block strong outlineIos>
        <p className="grid grid-cols-2 grid-gap">
          <Button large>Button</Button>
          <Button large fill>
            Fill
          </Button>
        </p>
        <p className="grid grid-cols-2 grid-gap">
          <Button large raised>
            Raised
          </Button>
          <Button large raised fill>
            Raised Fill
          </Button>
        </p>
      </Block>

      <BlockTitle>Small Buttons</BlockTitle>
      <Block strong outlineIos>
        <p className="grid grid-cols-3 grid-gap">
          <Button small>Button</Button>
          <Button small outline>
            Outline
          </Button>
          <Button small fill>
            Fill
          </Button>
        </p>
        <p className="grid grid-cols-3 grid-gap">
          <Button small round>
            Button
          </Button>
          <Button small outline round>
            Outline
          </Button>
          <Button small fill round>
            Fill
          </Button>
        </p>
      </Block>

      <BlockTitle>Preloader Buttons</BlockTitle>
      <Block strong outlineIos>
        <p className="grid grid-cols-2 grid-gap">
          <Button preloader loading={isLoading1} onClick={load1} large>
            Load
          </Button>
          <Button preloader loading={isLoading2} onClick={load2} large fill>
            Load
          </Button>
        </p>
      </Block>

      <BlockTitle>Color Buttons</BlockTitle>
      <Block strong outlineIos>
        <div className="grid grid-cols-3 grid-gap">
          <Button color="red">Red</Button>
          <Button color="green">Green</Button>
          <Button color="blue">Blue</Button>
        </div>
      </Block>

      <BlockTitle>Color Fill Buttons</BlockTitle>
      <Block strong outlineIos>
        <p className="grid grid-cols-3 grid-gap">
          <Button color="red">Red</Button>
          <Button color="green">Green</Button>
          <Button color="blue">Blue</Button>
        </p>
        <p className="grid grid-cols-3 grid-gap">
          <Button color="pink">Pink</Button>
          <Button color="yellow">Yellow</Button>
          <Button color="orange">Orange</Button>
        </p>
        <p className="grid grid-cols-3 grid-gap">
          <Button color="black">Black</Button>
          <Button color="white">White</Button>
        </p>
      </Block>
    </Page>
  );
}
