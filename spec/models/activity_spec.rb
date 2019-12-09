require "rails_helper"

describe Activity do
    describe "Validations" do
        let(:admin) {Administrator.new(username: "john", password: "password",
            name: "John Smith", points: 0, email:"johnsmith@gmail.com")}
        subject {Activity.new(title: "Do Chores", points_reward: 10,
            frequency: "once a day", administrator: admin)}
        it "is valid with valid attributes" do
            expect(subject).to be_valid
        end
        it "is not valid without a title" do
            subject.title = nil
            expect(subject).to_not be_valid
        end
        it "is not valid without a points reward" do
            subject.points_reward = nil
            expect(subject).to_not be_valid
        end
        it "is not valid without a frequency" do
            subject.frequency = nil
            expect(subject).to_not be_valid
        end
        it "is not valid without an administrator" do
            subject.administrator = nil
            expect(subject).to_not be_valid
        end
        it "is not valid with a zero points reward" do
            subject.points_reward = 0
            expect(subject).to_not be_valid
        end
        it "is not valid with negative points reward" do
            subject.points_reward = -1
            expect(subject).to_not be_valid
        end
    end

    describe "Associations" do
        it "belongs to an administrator" do
            assc = Activity.reflect_on_association(:administrator)
            expect(assc.macro).to eq :belongs_to
        end
        it "has many child activities" do
            assc = Activity.reflect_on_association(:child_activities)
            expect(assc.macro).to eq :has_many
        end
    end
end
