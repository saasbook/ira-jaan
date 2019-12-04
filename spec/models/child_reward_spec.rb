require "rails_helper"

describe ChildReward do
    describe "Validations" do
        let(:child) {Child.new(username: "billy", password: "password",
            name: "Billy Smith", points: 0)}
        let(:admin) {Administrator.new(username: "john", password: "password",
            name: "John Smith", points: 0, email:"johnsmith@gmail.com")}
        let(:reward) {Reward.new(points_cost: 100, name: "Toy", administrator: admin)}
        subject {ChildReward.new(child: child, reward: reward)}
        it "is valid with valid attributes" do
            expect(subject).to be_valid
        end
        it "is not valid without a child" do
            subject.child = nil
            expect(subject).to_not be_valid
        end
        it "is not valid without a reward" do
            subject.reward = nil
            expect(subject).to_not be_valid
        end
    end

    describe "Associations" do
        it "belongs to a child" do
            assc = ChildReward.reflect_on_association(:child)
            expect(assc.macro).to eq :belongs_to
        end
        it "belongs to an reward" do
            assc = ChildReward.reflect_on_association(:reward)
            expect(assc.macro).to eq :belongs_to
        end
    end
end
