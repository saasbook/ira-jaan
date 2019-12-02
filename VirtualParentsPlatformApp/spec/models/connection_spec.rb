require "rails_helper"

describe Connection do
    describe "Validations" do
        let(:admin) {Administrator.new(username: "john", password: "password",
            name: "John Smith", points: 0, email:"johnsmith@gmail.com")}
        let(:child) {Child.new(username: "billy", password: "password",
            name: "Billy Smith", points: 0)}
        subject {Connection.new(administrator: admin, child: child)}
        it "is valid with valid attributes" do
            expect(subject).to be_valid
        end
        it "is not valid without an administrator" do
            subject.administrator = nil
            expect(subject).to_not be_valid
        end
        it "is not valid without a child" do
            subject.child = nil
            expect(subject).to_not be_valid
        end
    end

    describe "Associations" do
        it "belongs to an administrator" do
            assc = Connection.reflect_on_association(:administrator)
            expect(assc.macro).to eq :belongs_to
        end
        it "belongs to a child" do
            assc = Connection.reflect_on_association(:child)
            expect(assc.macro).to eq :belongs_to
        end
    end
end
