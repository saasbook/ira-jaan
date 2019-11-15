require "rails_helper"

describe ChildActivity do
    describe "Validations" do
        let(:child) {Child.new(username: "billy", password: "password",
            name: "Billy Smith", points: 0)}
        let(:admin) {Administrator.new(username: "john", password: "password",
            name: "John Smith", points: 0, email:"johnsmith@gmail.com")}
        let(:activity) {Activity.new(title: "Do Chores", points_reward: 10,
            status: "working on", frequency: "once a day", administrator: admin)}
        subject {ChildActivity.new(child: child, activity: activity)}
        it "is valid with valid attributes" do
            expect(subject).to be_valid
        end
        it "is not valid without a child" do
            subject.child = nil
            expect(subject).to_not be_valid
        end
        it "is not valid without an activity" do
            subject.activity = nil
            expect(subject).to_not be_valid
        end
    end

    describe "Associations" do
        it "belongs to a child" do
            assc = ChildActivity.reflect_on_association(:child)
            expect(assc.macro).to eq :belongs_to
        end
        it "belongs to an activity" do
            assc = ChildActivity.reflect_on_association(:activity)
            expect(assc.macro).to eq :belongs_to
        end
    end
end
