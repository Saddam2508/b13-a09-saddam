"use client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Table } from "@heroui/react";

const AddFacility = () => {
  return (
    <div className="max-w-4xl mx-auto mt-30">
      <div className="my-2 text-end">
        <Modal>
          <Button variant="secondary">+ Add facility</Button>
          <Modal.Backdrop>
            <Modal.Container placement="auto">
              <Modal.Dialog className="sm:max-w-md">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                    <Envelope className="size-5" />
                  </Modal.Icon>
                  <Modal.Heading>Add Facility</Modal.Heading>
                </Modal.Header>
                <Modal.Body className="p-6">
                  <Surface variant="default">
                    <form className="flex flex-col gap-4">
                      <TextField className="w-full" name="name" type="text">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                      </TextField>
                      <TextField className="w-full" name="email" type="email">
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                      </TextField>
                      <TextField className="w-full" name="phone" type="tel">
                        <Label>Phone</Label>
                        <Input placeholder="Enter your phone number" />
                      </TextField>
                      <TextField className="w-full" name="company">
                        <Label>Company</Label>
                        <Input placeholder="Enter your company name" />
                      </TextField>
                      <TextField className="w-full" name="message">
                        <Label>Message</Label>
                        <Input placeholder="Enter your message" />
                      </TextField>
                    </form>
                  </Surface>
                </Modal.Body>
                <Modal.Footer>
                  <Button slot="close" variant="secondary">
                    Cancel
                  </Button>
                  <Button slot="close">Send Message</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>
      </div>
      {/* show data */}
      <div>
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="min-w-[600px]">
              <Table.Header>
                <Table.Column isRowHeader>Name</Table.Column>
                <Table.Column>Role</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Email</Table.Column>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Kate Moore</Table.Cell>
                  <Table.Cell>CEO</Table.Cell>
                  <Table.Cell>Active</Table.Cell>
                  <Table.Cell>kate@acme.com</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>John Smith</Table.Cell>
                  <Table.Cell>CTO</Table.Cell>
                  <Table.Cell>Active</Table.Cell>
                  <Table.Cell>john@acme.com</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Sara Johnson</Table.Cell>
                  <Table.Cell>CMO</Table.Cell>
                  <Table.Cell>On Leave</Table.Cell>
                  <Table.Cell>sara@acme.com</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Michael Brown</Table.Cell>
                  <Table.Cell>CFO</Table.Cell>
                  <Table.Cell>Active</Table.Cell>
                  <Table.Cell>michael@acme.com</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default AddFacility;
